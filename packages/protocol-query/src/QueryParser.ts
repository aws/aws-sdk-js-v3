import {isArrayBuffer} from '@aws/is-array-buffer';
import {extractMetadata} from '@aws/response-metadata-extractor';
import {
    BodyParser,
    Encoder,
    HttpResponse,
    MetadataBearer,
    OperationModel,
    ResponseParser,
    StreamCollector,
    ResponseMetadata,
    ServiceExceptionParser,
} from '@aws/types';

export class QueryParser<StreamType> implements ResponseParser<StreamType> {
    constructor(
        private readonly bodyParser: BodyParser,
        private readonly streamCollector: StreamCollector<StreamType>,
        private readonly utf8Encoder: Encoder,
        private readonly throwServiceException: ServiceExceptionParser
    ) {}

    parse<OutputType extends MetadataBearer>(
        operation: OperationModel,
        input: HttpResponse<StreamType>
    ): Promise<OutputType> {
        return this.resolveBodyString(input)
            .then(body => {
                if (input.statusCode > 299) {
                    this.throwServiceException(
                        operation,
                        {...input, body},
                        this.bodyParser
                    );
                }
                return this.bodyParser.parse<Partial<OutputType>>(
                    operation.output,
                    body
                )}
            ).then(parsedBody => {
                let responseMetadata = extractMetadata(input);
                this.updateMetadata(parsedBody, responseMetadata)
                return parsedBody as OutputType;
            });
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
            bufferPromise = this.streamCollector(body);
        }
        return bufferPromise.then(buffer => this.utf8Encoder(buffer));
    }

    private updateMetadata(parsedObj: Partial<MetadataBearer>, responseMetadata: ResponseMetadata): void {
        let bodyMetadata = parsedObj.$metadata
        if (bodyMetadata && bodyMetadata.requestId) {
            responseMetadata.requestId = bodyMetadata.requestId
        }
        parsedObj.$metadata = responseMetadata;
    }
}
