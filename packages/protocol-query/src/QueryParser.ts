import {isArrayBuffer} from '@aws/is-array-buffer';
import {extractMetadata} from '@aws/response-metadata-extractor';
import {
    Member,
    Structure,
    BodyParser,
    Encoder,
    HttpResponse,
    MetadataBearer,
    OperationModel,
    ResponseParser,
    StreamCollector,
} from '@aws/types';

export class QueryParser<StreamType> implements ResponseParser<StreamType> {
    constructor(
        private readonly bodyParser: BodyParser,
        private readonly streamCollector: StreamCollector<StreamType>,
        private readonly utf8Encoder: Encoder
    ) {}

    parse<OutputType extends MetadataBearer>(
        operation: OperationModel,
        input: HttpResponse<StreamType>
    ): Promise<OutputType> {
        return this.resolveBodyString(input)
            .then(body => {
                return this.bodyParser.parse<Partial<OutputType>>(
                    operation.output,
                    body
                )}
            ).then(partialOutput => {
                let responseMetadata = extractMetadata(input);
                let bodyMetadata = partialOutput.$metadata
                if (bodyMetadata && bodyMetadata.requestId) {
                    responseMetadata.requestId = bodyMetadata.requestId
                }
                partialOutput.$metadata = responseMetadata;
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
            bufferPromise = this.streamCollector(body);
        }

        return bufferPromise.then(buffer => this.utf8Encoder(buffer));
    }
}