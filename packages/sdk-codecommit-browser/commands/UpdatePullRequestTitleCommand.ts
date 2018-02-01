import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {UpdatePullRequestTitle} from '../model/UpdatePullRequestTitle';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdatePullRequestTitleInput} from '../types/UpdatePullRequestTitleInput';
import {UpdatePullRequestTitleOutput} from '../types/UpdatePullRequestTitleOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdatePullRequestTitleCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdatePullRequestTitleInput,
    OutputTypesUnion,
    UpdatePullRequestTitleOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        UpdatePullRequestTitleInput,
        UpdatePullRequestTitleOutput,
        ReadableStream
    >();

    constructor(readonly input: UpdatePullRequestTitleInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<UpdatePullRequestTitleInput, UpdatePullRequestTitleOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdatePullRequestTitle
        };

        return stack.resolve(
            handler<UpdatePullRequestTitleInput, UpdatePullRequestTitleOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}