import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetMergeConflicts} from '../model/GetMergeConflicts';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetMergeConflictsInput} from '../types/GetMergeConflictsInput';
import {GetMergeConflictsOutput} from '../types/GetMergeConflictsOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetMergeConflictsCommand implements __aws_types.Command<
    InputTypesUnion,
    GetMergeConflictsInput,
    OutputTypesUnion,
    GetMergeConflictsOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetMergeConflictsInput,
        GetMergeConflictsOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetMergeConflictsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<GetMergeConflictsInput, GetMergeConflictsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetMergeConflicts
        };

        return stack.resolve(
            handler<GetMergeConflictsInput, GetMergeConflictsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}