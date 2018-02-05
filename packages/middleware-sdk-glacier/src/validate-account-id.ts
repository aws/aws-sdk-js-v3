import {
    Handler,
    HandlerArguments
} from '@aws/types';

export function validateAccountId(
    next: Handler<any, any>
) {
    return async (args: HandlerArguments<any>) => {
        const input = {...args.input};
        if (input['accountId'] === void 0) {
            input['accountId'] = '-';
        }

        return next({
            ...args,
            input
        });
    }
}