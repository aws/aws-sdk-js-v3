import {extractMetadata} from '@aws/response-metadata-extractor';
import {isArrayBuffer} from '@aws/is-array-buffer';
import {initServiceException, ServiceExceptionOption} from '@aws/util-exceptions';
import {
    BodyParser,
    Encoder,
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
        let errorName = '';
        //extract from header
        if (input.headers['x-amzn-errortype']) {
            errorName = input.headers['x-amzn-errortype'].split(':')[0]
        } else if (body) { //extract from body
            const errorObj = JSON.parse(body);
            if (errorObj.__type || errorObj.code) {
                errorName = (errorObj.__type || errorObj.code).split('#').pop();
            }
        }
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
                errorStructure.exceptionType === errorName || 
                errorStructure.exceptionCode === errorName
            ) {
                let rawException = this.bodyParser.parse<any>(errorShape, body);
                throw initServiceException<ServiceException>(
                    new Error(),
                    {
                        $metadata: extractMetadata(input),
                        name: errorName,
                        rawException: rawException
                    }
                );
            }
        }
        //parsable exception but not documented in API
        const errorObj = JSON.parse(body);
        const option: ServiceExceptionOption = {
            $metadata: extractMetadata(input),
            name: errorName,
            message: errorObj.message || errorObj.Message || ''
        }
        throw initServiceException<ServiceException>(new Error(), option)
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
