import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {SetVaultAccessPolicy} from '../model/SetVaultAccessPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {SetVaultAccessPolicyInput} from '../types/SetVaultAccessPolicyInput';
import {SetVaultAccessPolicyOutput} from '../types/SetVaultAccessPolicyOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class SetVaultAccessPolicyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    SetVaultAccessPolicyInput,
    OutputTypesUnion,
    SetVaultAccessPolicyOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        SetVaultAccessPolicyInput,
        SetVaultAccessPolicyOutput,
        Blob
    >();

    constructor(readonly input: SetVaultAccessPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<SetVaultAccessPolicyInput, SetVaultAccessPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: SetVaultAccessPolicy
        };

        return stack.resolve(
            handler<SetVaultAccessPolicyInput, SetVaultAccessPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}