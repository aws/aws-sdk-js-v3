import { Handler, HandlerArguments } from '@aws-sdk/types';

export interface IdentifierBearer {
    DelegationSetId?: string;
    HostedZoneId?: string;
    Id?: string;
}

const IDENTIFIER_PARAMETERS: Array<keyof IdentifierBearer> = [
    'DelegationSetId',
    'HostedZoneId',
    'Id',
];

const IDENTIFIER_PREFIX_PATTERN = /^\/(hostedzone|change|delegationset)\//;

export function idNormalizerMiddleware<
    Input extends IdentifierBearer,
    Output extends object
>(next: Handler<Input, Output>): Handler<Input, Output> {
    return async (args: HandlerArguments<Input>): Promise<Output> => {
        const input = {...args.input as any};
        for (const paramName of IDENTIFIER_PARAMETERS) {
            const param = input[paramName];
            if (param) {
                input[paramName] = param.replace(IDENTIFIER_PREFIX_PATTERN, '');
            }
        }

        return next({
            ...args,
            input,
        });
    }
}

export interface Change {
    ResourceRecordSet: {
        AliasTarget?: {
            HostedZoneId: string;
        };
    };
}

export interface ChangeBatchBearer {
    ChangeBatch: {
        Changes: Iterable<Change>;
    };
}

export function changeBatchAliasTargetIdNormalizerMiddleware<
    Input extends ChangeBatchBearer,
    Output extends object
>(next: Handler<Input, Output>): Handler<Input, Output> {
    return async (args: HandlerArguments<Input>): Promise<Output> => {
        const { ChangeBatch } = args.input;
        const Changes: Array<Change> = [];
        for (const change of ChangeBatch.Changes) {
            const { AliasTarget } = change.ResourceRecordSet;
            if (AliasTarget) {
                Changes.push({
                    ...change,
                    ResourceRecordSet: {
                        ...change.ResourceRecordSet,
                        AliasTarget: {
                            ...AliasTarget,
                            HostedZoneId: AliasTarget.HostedZoneId
                                .replace(IDENTIFIER_PREFIX_PATTERN, ''),
                        }
                    }
                });
            } else {
                Changes.push(change);
            }
        }

        return next({
            ...args,
            input: {
                ...args.input as any,
                ChangeBatch: {
                    ...ChangeBatch,
                    Changes,
                }
            },
        });
    }
}
