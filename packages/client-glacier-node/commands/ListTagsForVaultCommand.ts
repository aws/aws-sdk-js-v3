import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListTagsForVault} from '../model/ListTagsForVault';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListTagsForVaultInput} from '../types/ListTagsForVaultInput';
import {ListTagsForVaultOutput} from '../types/ListTagsForVaultOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class ListTagsForVaultCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListTagsForVaultInput,
    OutputTypesUnion,
    ListTagsForVaultOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListTagsForVaultInput,
        ListTagsForVaultOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListTagsForVaultInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<ListTagsForVaultInput, ListTagsForVaultOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListTagsForVault
        };

        return stack.resolve(
            handler<ListTagsForVaultInput, ListTagsForVaultOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}