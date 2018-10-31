import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import {UpdateComment} from '../model/UpdateComment';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateCommentInput} from '../types/UpdateCommentInput';
import {UpdateCommentOutput} from '../types/UpdateCommentOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdateCommentCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdateCommentInput,
    OutputTypesUnion,
    UpdateCommentOutput,
    CodeCommitResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        UpdateCommentInput,
        UpdateCommentOutput,
        Blob
    >();

    constructor(readonly input: UpdateCommentInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<UpdateCommentInput, UpdateCommentOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateComment
        };

        return stack.resolve(
            handler<UpdateCommentInput, UpdateCommentOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}