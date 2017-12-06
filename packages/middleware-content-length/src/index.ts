import {
    BuildHandler,
    BuildHandlerArguments,
    BodyLengthCalculator,
} from '@aws/types';

export function contentLengthMiddleware<
    Input extends object,
    Output extends object,
    Stream
>(
    bodyLengthCalculator: BodyLengthCalculator,
    next: BuildHandler<Input, Output, Stream>
): BuildHandler<Input, Output, Stream> {
    return (args: BuildHandlerArguments<Input, Stream>): Promise<Output> => {
        const {request} = args;

        if (!request) {
            return Promise.reject(
                new Error('Unable to determine request content-length due to missing request.')
            );
        }

        const {body, headers} = request;
        if (
            body &&
            Object.keys(headers)
                .map(str => str.toLowerCase())
                .indexOf('content-length') === -1
        ) {
            headers['Content-Length'] = String(bodyLengthCalculator(body));
        }

        return next({
            ...args,
            request
        });
    }
}
