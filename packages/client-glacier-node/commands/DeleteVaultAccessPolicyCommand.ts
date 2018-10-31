import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DeleteVaultAccessPolicy} from '../model/DeleteVaultAccessPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteVaultAccessPolicyInput} from '../types/DeleteVaultAccessPolicyInput';
import {DeleteVaultAccessPolicyOutput} from '../types/DeleteVaultAccessPolicyOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class DeleteVaultAccessPolicyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeleteVaultAccessPolicyInput,
    OutputTypesUnion,
    DeleteVaultAccessPolicyOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeleteVaultAccessPolicyInput,
        DeleteVaultAccessPolicyOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteVaultAccessPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<DeleteVaultAccessPolicyInput, DeleteVaultAccessPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteVaultAccessPolicy
        };

        return stack.resolve(
            handler<DeleteVaultAccessPolicyInput, DeleteVaultAccessPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}