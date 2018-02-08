import {
    Handler,
    HandlerArguments,
    Middleware
} from '@aws/types';

export type InputDefaultArgs<
    Input extends object
> = {
    [field in keyof Input]?: Input[field];
};

export function inputDefault<
    Input extends object
>(
    inputBag: InputDefaultArgs<Input>
): Middleware<Input, any> {
    return (
        next: Handler<Input, any>
    ) => {
        return (args: HandlerArguments<any>) => {
            const input = {...args.input};

            for (const field of Object.keys(inputBag)) {
                if (!(field in input)) {
                    input[field] = inputBag[field as keyof Input];
                }
            }

            return next({
                ...args,
                input
            });
        }
    }
}