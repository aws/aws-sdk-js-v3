import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {DeleteArchive} from '../model/DeleteArchive';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteArchiveInput} from '../types/DeleteArchiveInput';
import {DeleteArchiveOutput} from '../types/DeleteArchiveOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class DeleteArchiveCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteArchiveInput,
    OutputTypesUnion,
    DeleteArchiveOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteArchiveInput,
        DeleteArchiveOutput,
        Blob
    >();

    constructor(readonly input: DeleteArchiveInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<DeleteArchiveInput, DeleteArchiveOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteArchive
        };

        return stack.resolve(
            handler<DeleteArchiveInput, DeleteArchiveOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}