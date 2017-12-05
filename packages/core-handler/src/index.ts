import {
    CoreHandlerConstructor,
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    HttpHandler,
    MetadataBearer,
    ResponseParser
} from '@aws/types';

/**
 * @implements {CoreHandlerConstructor}
 */
export function coreHandler<Output extends MetadataBearer, Stream = Uint8Array>(
    httpHandler: HttpHandler<Stream>,
    responseParser: ResponseParser<Stream>,
    {model}: HandlerExecutionContext
): Handler<any, Output, Stream> {
    return (
        {request, abortSignal}: HandlerArguments<any, Stream>
    ): Promise<Output> => {
        if (!request) {
            return Promise.reject(new Error('Request does not exist'));
        }

        return httpHandler.handle(request as any, {abortSignal})
            .then(response => responseParser.parse<Output>(model, response));
    }
}
