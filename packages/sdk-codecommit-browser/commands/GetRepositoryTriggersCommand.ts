import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
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
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<GetRepositoryTriggersInput, GetRepositoryTriggersOutput, ReadableStream>();

    constructor(readonly input: GetRepositoryTriggersInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
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