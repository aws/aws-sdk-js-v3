import {isArrayBuffer} from '@aws/is-array-buffer';
import {toDate} from '@aws/protocol-timestamp';
import {extractMetadata} from '@aws/response-metadata-extractor';
import {initServiceException} from "@aws/util-error-constructor"
import {
    BodyParser,
    Decoder,
    Encoder,
    HeaderBag,
    HttpResponse,
    Member,
    MetadataBearer,
    OperationModel,
    ResponseParser,
    SerializationModel,
    StreamCollector,
    Structure,
    ServiceExceptionParser
} from '@aws/types';

export class RestParser<StreamType> implements ResponseParser<StreamType> {
    constructor(
        private readonly bodyParser: BodyParser,
        private readonly bodyCollector: StreamCollector<StreamType>,
        private readonly parseServiceException: ServiceExceptionParser,
        private readonly utf8Encoder: Encoder,
        private readonly base64Decoder: Decoder,
    ) {}

    public parse<OutputType extends MetadataBearer>(
        operation: OperationModel,
        input: HttpResponse<StreamType>
    ): Promise<OutputType> {
        const output: Partial<OutputType> = {};
        output.$metadata = extractMetadata(input);

        if (this.responseIsSuccessful(input.statusCode)) {
            this.parseHeaders(output, input.headers, operation.output);
            this.parseStatusCode(output, input.statusCode, operation.output);
            return this.parseBody(output, operation.output, input) as Promise<OutputType>;
        } else {
            this.resolveBodyString(input.body).then(body => {
                throw this.parseServiceException(
                    operation,
                    {...input, body},
                    this.bodyParser
                )
            })
            return Promise.reject(initServiceException(new Error(), {$metadata: output.$metadata}))
        }
    }

    private parseBody(
        output: any,
        member: Member,
        response: HttpResponse<StreamType>
    ): Promise<any> {
        // determine if the member references a payload member
        const shape = member.shape as Structure;

        const body = response.body;

        const payloadName = shape.payload;

        if (payloadName) {
            const payloadMember = shape.members[payloadName];
            const payloadShape = payloadMember.shape;

            if (payloadShape.type === 'blob') {
                if (payloadMember.streaming || payloadShape.streaming) {
                    output[payloadName] = body;
                    return Promise.resolve(output);
                }
                // non-streaming blobs should always be byte arrays
                return this.resolveBody(body).then(buffer => {
                    output[payloadName] = buffer
                    return output;
                });
            } else {
                return this.resolveBodyString(body)
                    .then(body => {
                        if (
                            payloadShape.type === 'structure' ||
                            payloadShape.type === 'list' ||
                            payloadShape.type === 'map'
                        ) {
                            output[payloadName] = this.bodyParser.parse(payloadMember, body);
                        } else {
                            output[payloadName] = this.parseScalarBody(payloadShape, body);
                        }
                        return output;
                    });
            }
        } else {
            return this.resolveBodyString(body)
                .then(body => {
                    if (body.length > 0) {
                        const parsedBody:any = this.bodyParser.parse(member, body);
                        for (let key of Object.keys(parsedBody)) {
                            output[key] = parsedBody[key];
                        }
                    }
                    return Promise.resolve(output);
                });
        }
    }

    private parseHeaders(
        output: any,
        inputHeaders: HeaderBag,
        member: Member
    ): void {
        if (member.shape.type !== 'structure') {
            return;
        }
        const lowerInputHeaders: HeaderBag = {};

        // transform response headers into lowercase for easier comparisons
        for (let header of Object.keys(inputHeaders)) {
            lowerInputHeaders[header.toLowerCase()] = inputHeaders[header];
        }

        const members = member.shape.members

        for (let memberName of Object.keys(members)) {
            let member = members[memberName];
            let {
                location,
                locationName = memberName,
                shape: memberShape
            } = member;
            const hasLocationName = Boolean(member.locationName);

            if (location !== 'header' && location !== 'headers') {
                continue;
            }
            const ruleHeaderName = locationName.toLowerCase();
            const inputHeaderValue = lowerInputHeaders[ruleHeaderName];

            if (memberShape.type === 'map') {
                output[memberName] = {};
                const regex = new RegExp(`^${locationName}(.+)`, 'i');
                // iterate over each header
                for (let header of Object.keys(inputHeaders)) {
                    let result = header.match(regex);
                    if (result) {
                        output[memberName][result[1]] = inputHeaders[header];
                    }
                }
            } else {
                if (typeof inputHeaderValue !== 'undefined') {
                    output[memberName] = this.parseScalarHeader(memberShape, inputHeaderValue);
                }
            }
        }
    }

    private parseScalarBody(shape: SerializationModel, input: any) {
        switch (shape.type) {
            case 'timestamp':
                return toDate(input);
            case 'string':
                if (typeof input === 'string') {
                    return input;
                } else {
                    return this.utf8Encoder(input);
                }
            case 'boolean':
                return typeof input === 'boolean' ? input : input === 'true';
            case 'integer':
                return parseInt(input, 10);
            case 'float':
                return parseFloat(input);
        }
    }

    private parseScalarHeader(shape: SerializationModel, input: string) {
        switch (shape.type) {
            case 'timestamp':
                return toDate(input);
            case 'string':
                return shape.jsonValue ?
                    JSON.parse(this.utf8Encoder(this.base64Decoder(input))) : input;
            case 'boolean':
                return input === 'true';
            case 'integer':
                return parseInt(input, 10);
            case 'float':
                return parseFloat(input);
            case 'blob':
                return this.base64Decoder(input);
        }
    }

    private parseStatusCode(
        output: any,
        statusCode: number,
        member: Member
    ): void {
        if (!statusCode) {
            return;
        }
        const shape = member.shape as Structure;
        const members = shape.members;

        for (let memberName of Object.keys(members)) {
            let member = members[memberName];
            if (member.location === 'statusCode') {
                const name = member.locationName || memberName;
                output[name] = statusCode;
                return;
            }
        }
    }

    private resolveBody(body: HttpResponse<StreamType>['body'] = ''): Promise<Uint8Array|string> {
        if (typeof body === 'string') {
            return Promise.resolve(body);
        }

        let bufferPromise: Promise<Uint8Array>;
        if (ArrayBuffer.isView(body)) {
            bufferPromise = Promise.resolve(new Uint8Array(
                body.buffer,
                body.byteOffset,
                body.byteLength
            ));
        } else if (isArrayBuffer(body)) {
            bufferPromise = Promise.resolve(new Uint8Array(
                body,
                0,
                body.byteLength
            ));
        } else {
            bufferPromise = this.bodyCollector(body);
        }

        return bufferPromise;
    }

    private resolveBodyString(body: HttpResponse<StreamType>['body'] = ''): Promise<string> {
        return this.resolveBody(body).then(buffer => typeof buffer === 'string' ? buffer : this.utf8Encoder(buffer));
    }

    private responseIsSuccessful(statusCode: number): boolean {
        return statusCode < 300;
    }
}
