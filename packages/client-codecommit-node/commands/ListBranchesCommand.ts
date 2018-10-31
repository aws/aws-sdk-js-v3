import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListBranches} from '../model/ListBranches';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListBranchesInput} from '../types/ListBranchesInput';
import {ListBranchesOutput} from '../types/ListBranchesOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class ListBranchesCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListBranchesInput,
    OutputTypesUnion,
    ListBranchesOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListBranchesInput,
        ListBranchesOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListBranchesInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<ListBranchesInput, ListBranchesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListBranches
        };

        return stack.resolve(
            handler<ListBranchesInput, ListBranchesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}