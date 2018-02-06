import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {DeleteVaultAccessPolicy} from '../model/DeleteVaultAccessPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteVaultAccessPolicyInput} from '../types/DeleteVaultAccessPolicyInput';
import {DeleteVaultAccessPolicyOutput} from '../types/DeleteVaultAccessPolicyOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class DeleteVaultAccessPolicyCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteVaultAccessPolicyInput,
    OutputTypesUnion,
    DeleteVaultAccessPolicyOutput,
    GlacierResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteVaultAccessPolicyInput,
        DeleteVaultAccessPolicyOutput,
        ReadableStream
    >();

    constructor(readonly input: DeleteVaultAccessPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<DeleteVaultAccessPolicyInput, DeleteVaultAccessPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteVaultAccessPolicy
        };

        return stack.resolve(
            handler<DeleteVaultAccessPolicyInput, DeleteVaultAccessPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}