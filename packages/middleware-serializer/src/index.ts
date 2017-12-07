import {
    BuildHandler,
    BuildHandlerArguments,
    BuildMiddleware,
    HandlerExecutionContext,
    Provider,
    RequestSerializer
} from '@aws/types';

export function serializerMiddleware<
    Input extends object,
    Output extends object,
    Stream
>(
    requestSerializerProvider: Provider<RequestSerializer<Stream>>
): BuildMiddleware<Input, Output, Stream> {
    return (
        next: BuildHandler<Input, Output, Stream>,
        {model}: HandlerExecutionContext
    ): BuildHandler<Input, Output, Stream> => async (
        args: BuildHandlerArguments<Input, Stream>
    ): Promise<Output> => {
        const requestSerializer = await requestSerializerProvider();
        const request = requestSerializer.serialize(model, args.input);

        if (request.body && ['GET', 'HEAD'].indexOf(request.method) >= 0) {
            // remove body for GET/HEAD requests (fetch complains)
            delete request.body;
        }

        return next({
            request,
            ...args
        });
    };
}
