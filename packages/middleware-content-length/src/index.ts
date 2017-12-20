import {
    BuildHandler,
    BuildHandlerArguments,
    BuildMiddleware,
    BodyLengthCalculator,
    MetadataBearer,
} from '@aws/types';

export function contentLengthMiddleware(
    bodyLengthCalculator: BodyLengthCalculator
): BuildMiddleware<any, any, any> {
    return <Output extends MetadataBearer>(
        next: BuildHandler<any, Output, any>
    ): BuildHandler<any, Output, any> => async (
        args: BuildHandlerArguments<any, any>
    ): Promise<Output> => {
        const {request} = args;
        if (!request) {
            throw new Error('Unable to determine request content-length due to missing request.');
        }

        const {body, headers} = request;
        if (
            body &&
            Object.keys(headers)
                .map(str => str.toLowerCase())
                .indexOf('content-length') === -1
        ) {
            const length = bodyLengthCalculator(body);
            if (length !== undefined) {
                headers['Content-Length'] = String(length);
            }
        }

        return next({
            ...args,
            request
        });
    }
}
