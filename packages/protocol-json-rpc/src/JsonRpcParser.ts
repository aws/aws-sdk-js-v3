import {extractMetadata} from '@aws/response-metadata-extractor';
import {isArrayBuffer} from '@aws/is-array-buffer';
import {initServiceException, ServiceExceptionOption} from '@aws/util-exceptions';
import {
    BodyParser,
    Encoder,
    HeaderBag,
    HttpResponse,
    MetadataBearer,
    OperationModel,
    ResponseParser,
    StreamCollector,
    ServiceException,
    Structure,
    Member,
    ServiceMetadata,
} from '@aws/types';

interface ResolvedHttpResponse extends HttpResponse {
    body: string
}

export class JsonRpcParser<StreamType> implements ResponseParser<StreamType> {
    constructor(
        private readonly bodyParser: BodyParser,
        private readonly bodyCollector: StreamCollector<StreamType>,
        private readonly utf8Encoder: Encoder
    ) {}

    async parse<OutputType extends MetadataBearer>(
        operation: OperationModel,
        input: HttpResponse<StreamType>
    ): Promise<OutputType> {
        return this.resolveBodyString(input)
            .then(body => {
                if (input.statusCode > 399) {
                    this.throwException(
                        operation.errors,
                        {...input, body: body}
                    )
                }
                return this.bodyParser.parse<Partial<OutputType>>(
                operation.output,
                body
            )}).then(partialOutput => {
                partialOutput.$metadata = extractMetadata(input);
                return partialOutput as OutputType;
            });
    }

    private throwException(
        errors: Member[],
        input: ResolvedHttpResponse
    ): Promise<never> {
        const {body} = input;
        const errorCodeFieldNameList = [
            '__type', //default field name
            'code', //currently only Glacier uses this field name
        ]
        const errorCodeHeaderName = 'x-amzn-errortype';
        let errorName = this.parseErrorCodeFromHeader(input.headers, errorCodeHeaderName) ||
                this.parseErrorCodeFromBody(body, errorCodeFieldNameList) ||
                undefined;          
        if (!errorName) {
            throw initServiceException<ServiceMetadata>(
                new Error(), 
                {$metadata: extractMetadata(input)}
            )
        }
        //find corresponding error from operation model
        for (let errorShape of errors) {
            const errorStructure = <Structure>errorShape.shape;
            if (
                errorStructure.exceptionCode === errorName ||
                (!errorStructure.exceptionCode && errorStructure.exceptionType === errorName)              
            ) {
                let rawException = this.bodyParser.parse<any>(errorShape, body);
                throw initServiceException<ServiceException>(new Error(), {
                    $metadata: extractMetadata(input),
                    name: errorName,
                    rawException: rawException
                });
            }
        }
        //parsable exception but not documented in API
        const messageLocationList = ['message', 'Message', 'errorMessage'];
        const option: ServiceExceptionOption = {
            $metadata: extractMetadata(input),
            name: errorName,
            message: this.parseJsonMessage(body, messageLocationList) || ''
        }
        throw initServiceException<ServiceException>(new Error(), option)
    }

    private parseErrorCodeFromHeader(headers: HeaderBag, targetHeaderName: string): string|undefined {
        const errorCode = headers[targetHeaderName];
        return typeof errorCode === 'string' ? errorCode.split(':')[0] : undefined
    }

    private parseErrorCodeFromBody(body: string, errorCodeFieldNameList: string[]): string|undefined {
        if (body) {
            const errorOBJ = JSON.parse(body);
            for (const fieldName of errorCodeFieldNameList) {
                if (errorOBJ[fieldName]) {
                    return errorOBJ[fieldName].split('#').pop();
                }
            }
        }   
        return undefined;
    }

    private parseJsonMessage(body: string, messageLocations: string[]): string|undefined {
        return this.parseErrorCodeFromBody(body, messageLocations);
    }

    private resolveBodyString(
        input: HttpResponse<StreamType>
    ): Promise<string> {
        const {body = ''} = input;
        if (typeof body === 'string') {
            return Promise.resolve(body);
        }

        let bufferPromise: Promise<Uint8Array>;
        if (ArrayBuffer.isView(body)) {
            bufferPromise = Promise.resolve(new Uint8Array(
                body.buffer,
                body.byteLength,
                body.byteOffset
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

        return bufferPromise.then(buffer => this.utf8Encoder(buffer));
    }
}
