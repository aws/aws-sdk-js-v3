import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetRepository} from '../model/GetRepository';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetRepositoryInput} from '../types/GetRepositoryInput';
import {GetRepositoryOutput} from '../types/GetRepositoryOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetRepositoryCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetRepositoryInput,
    OutputTypesUnion,
    GetRepositoryOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetRepositoryInput,
        GetRepositoryOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetRepositoryInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<GetRepositoryInput, GetRepositoryOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetRepository
        };

        return stack.resolve(
            handler<GetRepositoryInput, GetRepositoryOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}