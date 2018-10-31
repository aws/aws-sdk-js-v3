import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import {GetRepositoryTriggers} from '../model/GetRepositoryTriggers';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetRepositoryTriggersInput} from '../types/GetRepositoryTriggersInput';
import {GetRepositoryTriggersOutput} from '../types/GetRepositoryTriggersOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetRepositoryTriggersCommand implements __aws_types.Command<
    InputTypesUnion,
    GetRepositoryTriggersInput,
    OutputTypesUnion,
    GetRepositoryTriggersOutput,
    CodeCommitResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetRepositoryTriggersInput,
        GetRepositoryTriggersOutput,
        Blob
    >();

    constructor(readonly input: GetRepositoryTriggersInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<GetRepositoryTriggersInput, GetRepositoryTriggersOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetRepositoryTriggers
        };

        return stack.resolve(
            handler<GetRepositoryTriggersInput, GetRepositoryTriggersOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}