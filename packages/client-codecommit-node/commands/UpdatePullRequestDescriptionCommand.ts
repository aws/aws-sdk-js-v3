import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {UpdatePullRequestDescription} from '../model/UpdatePullRequestDescription';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdatePullRequestDescriptionInput} from '../types/UpdatePullRequestDescriptionInput';
import {UpdatePullRequestDescriptionOutput} from '../types/UpdatePullRequestDescriptionOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdatePullRequestDescriptionCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdatePullRequestDescriptionInput,
    OutputTypesUnion,
    UpdatePullRequestDescriptionOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdatePullRequestDescriptionInput,
        UpdatePullRequestDescriptionOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdatePullRequestDescriptionInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdatePullRequestDescriptionInput, UpdatePullRequestDescriptionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdatePullRequestDescription
        };

        return stack.resolve(
            handler<UpdatePullRequestDescriptionInput, UpdatePullRequestDescriptionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}