import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {SetVaultAccessPolicy} from '../model/SetVaultAccessPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {SetVaultAccessPolicyInput} from '../types/SetVaultAccessPolicyInput';
import {SetVaultAccessPolicyOutput} from '../types/SetVaultAccessPolicyOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class SetVaultAccessPolicyCommand implements __aws_types.Command<
    InputTypesUnion,
    SetVaultAccessPolicyInput,
    OutputTypesUnion,
    SetVaultAccessPolicyOutput,
    GlacierResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<SetVaultAccessPolicyInput, SetVaultAccessPolicyOutput, ReadableStream>();

    constructor(readonly input: SetVaultAccessPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<SetVaultAccessPolicyInput, SetVaultAccessPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: SetVaultAccessPolicy
        };

        return stack.resolve(
            handler<SetVaultAccessPolicyInput, SetVaultAccessPolicyOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}