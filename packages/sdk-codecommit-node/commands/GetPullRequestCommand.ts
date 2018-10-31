import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetPullRequest} from '../model/GetPullRequest';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetPullRequestInput} from '../types/GetPullRequestInput';
import {GetPullRequestOutput} from '../types/GetPullRequestOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetPullRequestCommand implements __aws_types.Command<
    InputTypesUnion,
    GetPullRequestInput,
    OutputTypesUnion,
    GetPullRequestOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetPullRequestInput,
        GetPullRequestOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetPullRequestInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<GetPullRequestInput, GetPullRequestOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetPullRequest
        };

        return stack.resolve(
            handler<GetPullRequestInput, GetPullRequestOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}