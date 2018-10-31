import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import {CreatePullRequest} from '../model/CreatePullRequest';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreatePullRequestInput} from '../types/CreatePullRequestInput';
import {CreatePullRequestOutput} from '../types/CreatePullRequestOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class CreatePullRequestCommand implements __aws_types.Command<
    InputTypesUnion,
    CreatePullRequestInput,
    OutputTypesUnion,
    CreatePullRequestOutput,
    CodeCommitResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CreatePullRequestInput,
        CreatePullRequestOutput,
        Blob
    >();

    constructor(readonly input: CreatePullRequestInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<CreatePullRequestInput, CreatePullRequestOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreatePullRequest
        };

        return stack.resolve(
            handler<CreatePullRequestInput, CreatePullRequestOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}