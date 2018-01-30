import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {DeleteRepository} from '../model/DeleteRepository';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteRepositoryInput} from '../types/DeleteRepositoryInput';
import {DeleteRepositoryOutput} from '../types/DeleteRepositoryOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class DeleteRepositoryCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteRepositoryInput,
    OutputTypesUnion,
    DeleteRepositoryOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteRepositoryInput,
        DeleteRepositoryOutput,
        ReadableStream
    >();

    constructor(readonly input: DeleteRepositoryInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<DeleteRepositoryInput, DeleteRepositoryOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteRepository
        };

        return stack.resolve(
            handler<DeleteRepositoryInput, DeleteRepositoryOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}