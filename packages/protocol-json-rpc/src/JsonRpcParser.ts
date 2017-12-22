import {extractMetadata} from '@aws/response-metadata-extractor';
import {isArrayBuffer} from '@aws/is-array-buffer';
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
    ServiceExceptionParser,
} from '@aws/types';

export class JsonRpcParser<StreamType> implements ResponseParser<StreamType> {
    constructor(
        private readonly bodyParser: BodyParser,
        private readonly throwServiceException: ServiceExceptionParser,
        private readonly bodyCollector: StreamCollector<StreamType>,
        private readonly utf8Encoder: Encoder,
    ) {}

    async parse<OutputType extends MetadataBearer>(
        operation: OperationModel,
        input: HttpResponse<StreamType>
    ): Promise<OutputType> {
        return this.resolveBodyString(input)
            .then(body => {
                if (input.statusCode > 299) {
                    this.throwServiceException(
                        operation,
                        {...input, body: body},
                        this.bodyParser
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
