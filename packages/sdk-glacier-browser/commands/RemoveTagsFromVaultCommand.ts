import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import {RemoveTagsFromVault} from '../model/RemoveTagsFromVault';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {RemoveTagsFromVaultInput} from '../types/RemoveTagsFromVaultInput';
import {RemoveTagsFromVaultOutput} from '../types/RemoveTagsFromVaultOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class RemoveTagsFromVaultCommand implements __aws_types.Command<
    InputTypesUnion,
    RemoveTagsFromVaultInput,
    OutputTypesUnion,
    RemoveTagsFromVaultOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        RemoveTagsFromVaultInput,
        RemoveTagsFromVaultOutput,
        Blob
    >();

    constructor(readonly input: RemoveTagsFromVaultInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<RemoveTagsFromVaultInput, RemoveTagsFromVaultOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: RemoveTagsFromVault
        };

        return stack.resolve(
            handler<RemoveTagsFromVaultInput, RemoveTagsFromVaultOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}