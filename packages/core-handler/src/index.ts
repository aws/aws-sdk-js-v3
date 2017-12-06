import {
    FinalizeHandler,
    FinalizeHandlerArguments,
    HandlerExecutionContext,
    HttpHandler,
    MetadataBearer,
    ResponseParser,
    Terminalware,
} from '@aws/types';

/**
 * @implements {Terminalware}
 */
export function coreHandler<Output extends MetadataBearer, Stream = Uint8Array>(
    httpHandler: HttpHandler<Stream>,
    responseParser: ResponseParser<Stream>,
    {model}: HandlerExecutionContext
): FinalizeHandler<any, Output, Stream> {
    return (
        {request, abortSignal}: FinalizeHandlerArguments<any, Stream>
    ): Promise<Output> => {
        return httpHandler.handle(request as any, {abortSignal})
            .then(response => responseParser.parse<Output>(model, response));
    }
}
