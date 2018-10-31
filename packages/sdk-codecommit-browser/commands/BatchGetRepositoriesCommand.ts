import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import {BatchGetRepositories} from '../model/BatchGetRepositories';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {BatchGetRepositoriesInput} from '../types/BatchGetRepositoriesInput';
import {BatchGetRepositoriesOutput} from '../types/BatchGetRepositoriesOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class BatchGetRepositoriesCommand implements __aws_types.Command<
    InputTypesUnion,
    BatchGetRepositoriesInput,
    OutputTypesUnion,
    BatchGetRepositoriesOutput,
    CodeCommitResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        BatchGetRepositoriesInput,
        BatchGetRepositoriesOutput,
        Blob
    >();

    constructor(readonly input: BatchGetRepositoriesInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<BatchGetRepositoriesInput, BatchGetRepositoriesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: BatchGetRepositories
        };

        return stack.resolve(
            handler<BatchGetRepositoriesInput, BatchGetRepositoriesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}