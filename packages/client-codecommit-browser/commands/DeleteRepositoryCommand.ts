import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {DeleteRepository} from '../model/DeleteRepository';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteRepositoryInput} from '../types/DeleteRepositoryInput';
import {DeleteRepositoryOutput} from '../types/DeleteRepositoryOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class DeleteRepositoryCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeleteRepositoryInput,
    OutputTypesUnion,
    DeleteRepositoryOutput,
    CodeCommitResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeleteRepositoryInput,
        DeleteRepositoryOutput,
        Blob
    >();

    constructor(readonly input: DeleteRepositoryInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<DeleteRepositoryInput, DeleteRepositoryOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteRepository
        };

        return stack.resolve(
            handler<DeleteRepositoryInput, DeleteRepositoryOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}