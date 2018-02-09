import {
    BuildHandlerArguments,
    BuildMiddleware,
    BuildHandler,
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    Middleware,
    MetadataBearer,
} from '@aws/types';
import { headerDefault } from '@aws/middleware-header-default';

export function addContentType<Output extends MetadataBearer = MetadataBearer>(
    next: BuildHandler<any, Output, any>,
    context: HandlerExecutionContext,
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
        return headerDefault({
            'Content-Type': 'application/octet-stream'
        })(next, context)(args);
    }
} 
