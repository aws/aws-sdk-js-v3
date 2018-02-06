import {
    BuildHandlerArguments,
    BuildMiddleware,
    BuildHandler,
    Handler,
    HandlerArguments,
    Middleware,
    MetadataBearer,
} from '@aws/types';

export function addContentType<Output extends MetadataBearer = MetadataBearer>(
    next: BuildHandler<any, Output, any>,
): BuildHandler<any, any, any> {
    return (
        args: BuildHandlerArguments<any>
    ): Promise<MetadataBearer> => {
        const {request} = args;
        if (
            request.method === 'GET' ||
            request.method === 'HEAD' ||
            'Content-Type' in request.headers
        ) {
            return next(args);
        }
        request.headers['Content-Type'] = 'application/octet-stream';
        return next(args);
    }
} 
