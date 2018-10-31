import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {DeleteVault} from '../model/DeleteVault';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteVaultInput} from '../types/DeleteVaultInput';
import {DeleteVaultOutput} from '../types/DeleteVaultOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class DeleteVaultCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeleteVaultInput,
    OutputTypesUnion,
    DeleteVaultOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeleteVaultInput,
        DeleteVaultOutput,
        Blob
    >();

    constructor(readonly input: DeleteVaultInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<DeleteVaultInput, DeleteVaultOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteVault
        };

        return stack.resolve(
            handler<DeleteVaultInput, DeleteVaultOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}