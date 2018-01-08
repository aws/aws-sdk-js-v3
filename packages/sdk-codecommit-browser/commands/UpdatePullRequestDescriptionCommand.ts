import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {UpdatePullRequestDescription} from '../model/UpdatePullRequestDescription';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdatePullRequestDescriptionInput} from '../types/UpdatePullRequestDescriptionInput';
import {UpdatePullRequestDescriptionOutput} from '../types/UpdatePullRequestDescriptionOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdatePullRequestDescriptionCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdatePullRequestDescriptionInput,
    OutputTypesUnion,
    UpdatePullRequestDescriptionOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<UpdatePullRequestDescriptionInput, UpdatePullRequestDescriptionOutput, ReadableStream>();

    constructor(readonly input: UpdatePullRequestDescriptionInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<UpdatePullRequestDescriptionInput, UpdatePullRequestDescriptionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdatePullRequestDescription
        };

        return stack.resolve(
            handler<UpdatePullRequestDescriptionInput, UpdatePullRequestDescriptionOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}