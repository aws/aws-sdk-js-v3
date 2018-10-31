import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {UpdatePullRequestStatus} from '../model/UpdatePullRequestStatus';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdatePullRequestStatusInput} from '../types/UpdatePullRequestStatusInput';
import {UpdatePullRequestStatusOutput} from '../types/UpdatePullRequestStatusOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdatePullRequestStatusCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdatePullRequestStatusInput,
    OutputTypesUnion,
    UpdatePullRequestStatusOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdatePullRequestStatusInput,
        UpdatePullRequestStatusOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdatePullRequestStatusInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdatePullRequestStatusInput, UpdatePullRequestStatusOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdatePullRequestStatus
        };

        return stack.resolve(
            handler<UpdatePullRequestStatusInput, UpdatePullRequestStatusOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}