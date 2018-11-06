import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {AddTagsToVault} from '../model/AddTagsToVault';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {AddTagsToVaultInput} from '../types/AddTagsToVaultInput';
import {AddTagsToVaultOutput} from '../types/AddTagsToVaultOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class AddTagsToVaultCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    AddTagsToVaultInput,
    OutputTypesUnion,
    AddTagsToVaultOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        AddTagsToVaultInput,
        AddTagsToVaultOutput,
        Blob
    >();

    constructor(readonly input: AddTagsToVaultInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<AddTagsToVaultInput, AddTagsToVaultOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: AddTagsToVault
        };

        return stack.resolve(
            handler<AddTagsToVaultInput, AddTagsToVaultOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}