import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetBranch} from '../model/GetBranch';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetBranchInput} from '../types/GetBranchInput';
import {GetBranchOutput} from '../types/GetBranchOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetBranchCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetBranchInput,
    OutputTypesUnion,
    GetBranchOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetBranchInput,
        GetBranchOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetBranchInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<GetBranchInput, GetBranchOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetBranch
        };

        return stack.resolve(
            handler<GetBranchInput, GetBranchOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}