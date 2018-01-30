import {
    HandlerExecutionContext,
    Provider,
    RequestSerializer,
    SerializeHandler,
    SerializeHandlerArguments,
    SerializeMiddleware,
} from '@aws/types';

export function serializerMiddleware<
    Input extends object,
    Output extends object,
    Stream
>(
    requestSerializerProvider: Provider<RequestSerializer<Stream>>
): SerializeMiddleware<Input, Output, Stream> {
    return (
        next: SerializeHandler<Input, Output, Stream>,
        {model}: HandlerExecutionContext
    ): SerializeHandler<Input, Output, Stream> => async (
        args: SerializeHandlerArguments<Input, Stream>
    ): Promise<Output> => {
        const requestSerializer = await requestSerializerProvider();
        const request = requestSerializer.serialize(model, args.input);

        if (request.body && ['GET', 'HEAD'].indexOf(request.method) >= 0) {
            // remove body for GET/HEAD requests (fetch complains)
            delete request.body;
        }

        return next({
            ...args,
            request,
        });
    };
}
