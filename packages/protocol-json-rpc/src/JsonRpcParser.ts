import {extractMetadata} from '@aws-sdk/response-metadata-extractor';
import {isArrayBuffer} from '@aws-sdk/is-array-buffer';
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
} from '@aws-sdk/types';

export class JsonRpcParser<StreamType> implements ResponseParser<StreamType> {
    constructor(
        private readonly bodyParser: BodyParser,
        private readonly parseServiceException: ServiceExceptionParser,
        private readonly bodyCollector: StreamCollector<StreamType>,
        private readonly utf8Encoder: Encoder,
    ) {}

    async parse<OutputType extends MetadataBearer>(
        operation: OperationModel,
        input: HttpResponse<StreamType>
    ): Promise<OutputType> {
        const body = await this.resolveBodyString(input)
        if (input.statusCode > 299) {
            throw this.parseServiceException(
                operation,
                {...input, body: body},
                this.bodyParser
            )
        }
        const partialOutput = this.bodyParser.parse<Partial<OutputType>>(
            operation.output,
            body,
        )
        partialOutput.$metadata = extractMetadata(input);
        return partialOutput as OutputType;
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
