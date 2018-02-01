import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {DeleteBranch} from '../model/DeleteBranch';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteBranchInput} from '../types/DeleteBranchInput';
import {DeleteBranchOutput} from '../types/DeleteBranchOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class DeleteBranchCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteBranchInput,
    OutputTypesUnion,
    DeleteBranchOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteBranchInput,
        DeleteBranchOutput,
        ReadableStream
    >();

    constructor(readonly input: DeleteBranchInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<DeleteBranchInput, DeleteBranchOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteBranch
        };

        return stack.resolve(
            handler<DeleteBranchInput, DeleteBranchOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}