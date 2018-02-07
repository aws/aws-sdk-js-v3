import {
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    Middleware,
    Provider,
} from '@aws/types';

export interface LocationConstraintAwareInput {
    CreateBucketConfiguration?: {
        LocationConstraint?: string;
    }
}

export function locationConstraintMiddleware<
    Input extends LocationConstraintAwareInput,
    Output extends object
>(
    regionProvider: Provider<string>
): Middleware<Input, Output> {
    return (next: Handler<Input, Output>): Handler<Input, Output> => async (
        args: HandlerArguments<Input>
    ): Promise<Output> => {
        const region = await regionProvider();
        const {CreateBucketConfiguration} = args.input;
        if (
            !CreateBucketConfiguration ||
            !CreateBucketConfiguration.LocationConstraint
        ) {
            args = {
                ...args,
                input: {
                    ...args.input as any, // Cast to any necessary until https://github.com/Microsoft/TypeScript/pull/13288 lands
                    CreateBucketConfiguration: { LocationConstraint: region },
                }
            }
        } else if (region === 'us-east-1') {
            args = {
                ...args,
                input: {
                    ...args.input as any, // Cast to any necessary until https://github.com/Microsoft/TypeScript/pull/13288 lands
                    CreateBucketConfiguration: undefined,
                }
            }
        }

        return next(args);
    }
}
