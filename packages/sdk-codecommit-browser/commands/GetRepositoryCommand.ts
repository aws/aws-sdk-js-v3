import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {GetRepository} from '../model/GetRepository';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetRepositoryInput} from '../types/GetRepositoryInput';
import {GetRepositoryOutput} from '../types/GetRepositoryOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetRepositoryCommand implements __aws_types.Command<
    InputTypesUnion,
    GetRepositoryInput,
    OutputTypesUnion,
    GetRepositoryOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetRepositoryInput,
        GetRepositoryOutput,
        ReadableStream
    >();

    constructor(readonly input: GetRepositoryInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<GetRepositoryInput, GetRepositoryOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetRepository
        };

        return stack.resolve(
            handler<GetRepositoryInput, GetRepositoryOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}