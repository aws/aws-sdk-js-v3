import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_browser from '@aws/util-body-length-browser';
import {UpdatePullRequestStatus} from '../model/UpdatePullRequestStatus';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdatePullRequestStatusInput} from '../types/UpdatePullRequestStatusInput';
import {UpdatePullRequestStatusOutput} from '../types/UpdatePullRequestStatusOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdatePullRequestStatusCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdatePullRequestStatusInput,
    OutputTypesUnion,
    UpdatePullRequestStatusOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<UpdatePullRequestStatusInput, UpdatePullRequestStatusOutput, ReadableStream>();

    constructor(readonly input: UpdatePullRequestStatusInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<UpdatePullRequestStatusInput, UpdatePullRequestStatusOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdatePullRequestStatus
        };

        return stack.resolve(
            handler<UpdatePullRequestStatusInput, UpdatePullRequestStatusOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}