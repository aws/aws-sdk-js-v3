import {isArrayBuffer} from '@aws/is-array-buffer';
import {extractMetadata} from '@aws/response-metadata-extractor';
import {
    ERR_RESP_SHAPE,
    ParsedErrorResponse
} from './constant';
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
    ResponseMetadata,
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

    private throwException(errors: Member[], input: ResolvedHttpResponse): Promise<never> {
        const {body} = input;
        let preparsedErrorResponse = this.bodyParser.parse<ParsedErrorResponse>(ERR_RESP_SHAPE, body);
        const errorName = (preparsedErrorResponse && preparsedErrorResponse.Error) ? preparsedErrorResponse.Error.Code : undefined;
        const errorMessage = (preparsedErrorResponse && preparsedErrorResponse.Error)  ? preparsedErrorResponse.Error.Message : undefined;
        const {$metadata: {requestId}} = preparsedErrorResponse;
        if (!errorName) {
            throw initServiceException<ServiceException>(
                new Error(), 
                {$metadata: {
                    ...extractMetadata(input),
                    requestId
                }}
            )
        }
        //parse error properties from API other than name and message
        for (let errorShape of errors) {
            const errorStructure = <Structure>errorShape.shape;
            if (
                errorStructure.exceptionCode === errorName ||
                (!errorStructure.exceptionCode && errorStructure.exceptionType === errorName)              
            ) {
                const rawException = this.parseErrorOwnProperties(errorShape, body);
                throw initServiceException<ServiceException>(new Error(), {
                    $metadata: {
                        ...extractMetadata(input),
                        requestId
                    },
                    name: errorName,
                    message: errorMessage,
                    rawException: rawException
                });
            }
        }
        //parsable exception but not documented in API
        throw initServiceException<ServiceException>(new Error(), {
            $metadata: {
                ...extractMetadata(input),
                requestId
            },
            name: errorName,
            message: errorMessage,
        })
    }

    private parseErrorOwnProperties(errorShape: Member, body: string): any {
        if(!(errorShape.shape as Structure).members) {
            return undefined;
        }
        const wrappedErrorShape: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    Error: errorShape
                }
            }
        }
        let rawException = this.bodyParser.parse<MetadataBearer & {Error: any}>(wrappedErrorShape, body);
        return rawException.Error;
    }
}
