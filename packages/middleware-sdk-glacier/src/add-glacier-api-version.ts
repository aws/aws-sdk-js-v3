
import {
    BuildHandler,
    BuildHandlerArguments,
    HandlerExecutionContext
} from '@aws/types';

export function addGlacierApiVersion() {
        return (
            next: BuildHandler<any, any, any>,
            {model}: HandlerExecutionContext
        ) => {
            return async(args: BuildHandlerArguments<any, any>) => {
                const input = {...args.input};
                const request = args.request;

                if (!request) {
                    throw new Error('Unable to add glacier version due to missing request.');
                }
    
                request.headers['x-amz-glacier-version'] = model.metadata.apiVersion;

                return next(args);
            };
        };
    }