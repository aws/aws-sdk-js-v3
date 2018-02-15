import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {CreateBranch} from '../model/CreateBranch';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateBranchInput} from '../types/CreateBranchInput';
import {CreateBranchOutput} from '../types/CreateBranchOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class CreateBranchCommand implements __aws_types.Command<
    InputTypesUnion,
    CreateBranchInput,
    OutputTypesUnion,
    CreateBranchOutput,
    CodeCommitResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CreateBranchInput,
        CreateBranchOutput,
        Blob
    >();

    constructor(readonly input: CreateBranchInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<CreateBranchInput, CreateBranchOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateBranch
        };

        return stack.resolve(
            handler<CreateBranchInput, CreateBranchOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}