import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {MergePullRequestByFastForward} from '../model/MergePullRequestByFastForward';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {MergePullRequestByFastForwardInput} from '../types/MergePullRequestByFastForwardInput';
import {MergePullRequestByFastForwardOutput} from '../types/MergePullRequestByFastForwardOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class MergePullRequestByFastForwardCommand implements __aws_types.Command<
    InputTypesUnion,
    MergePullRequestByFastForwardInput,
    OutputTypesUnion,
    MergePullRequestByFastForwardOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        MergePullRequestByFastForwardInput,
        MergePullRequestByFastForwardOutput,
        _stream.Readable
    >();

    constructor(readonly input: MergePullRequestByFastForwardInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<MergePullRequestByFastForwardInput, MergePullRequestByFastForwardOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: MergePullRequestByFastForward
        };

        return stack.resolve(
            handler<MergePullRequestByFastForwardInput, MergePullRequestByFastForwardOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}