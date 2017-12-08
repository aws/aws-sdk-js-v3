import {isArrayBuffer} from '@aws/is-array-buffer';
import {extractMetadata} from '@aws/response-metadata-extractor';
import {ERR_RESP_SHAPE} from './constent';
import {
    initServiceException,
    ServiceExceptionOption,
} from '@aws/util-exceptions';
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
    ServiceException,
} from '@aws/types';

interface ResolvedHttpResponse extends HttpResponse {
    body: string
}

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
                if (input.statusCode > 299) {
                    this.throwException(
                        operation.errors,
                        {...input, body}
                    );
                }
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

    private throwException(errors: Member[], input: ResolvedHttpResponse): Promise<never> {
        const {body} = input;
        const errorName = this.parseErrorCodeFromBody(body);
        if (!errorName) {
            throw initServiceException<ServiceException>(
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
        throw new Error();
    }

    private parseErrorCodeFromBody(body: string): string|undefined {
        const errorResponse = this.bodyParser.parse<{Type: {Code: string}}>(ERR_RESP_SHAPE, body);
        return (errorResponse.Type && errorResponse.Type.Code) ? errorResponse.Type.Code : undefined;
    }
}
