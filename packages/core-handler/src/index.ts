import {
    FinalizeHandler,
    FinalizeHandlerArguments,
    HandlerExecutionContext,
    HttpHandler,
    MetadataBearer,
    ResponseParser,
    Terminalware,
} from '@aws/types';

export function coreHandler<OutputConstraint extends MetadataBearer, Stream = Uint8Array>(
    httpHandler: HttpHandler<Stream>,
    responseParser: ResponseParser<Stream>
): Terminalware<OutputConstraint, Stream> {
    return <Input extends object, Output extends OutputConstraint>(
        {model}: HandlerExecutionContext
    ): FinalizeHandler<Input, Output, Stream> => (
        {request, abortSignal}: FinalizeHandlerArguments<Input, Stream>
    ): Promise<Output> => httpHandler.handle(request, {abortSignal})
            .then(response => responseParser.parse<Output>(model, response))
}
