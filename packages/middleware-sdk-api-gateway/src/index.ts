import {
    BuildHandler,
    BuildHandlerArguments
} from '@aws/types';

export function acceptsHeader(next: BuildHandler<any, any>) {
    return async (args: BuildHandlerArguments<any, any>) => {
        const request = args.request;

        if (!request) {
            throw new Error('Unable to add Accepts header due to missing request.');
        }

        request.headers['accepts'] = 'application/json';

        return next(args);
    }
}