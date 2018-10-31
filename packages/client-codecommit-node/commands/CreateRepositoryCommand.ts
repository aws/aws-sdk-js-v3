import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {CreateRepository} from '../model/CreateRepository';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateRepositoryInput} from '../types/CreateRepositoryInput';
import {CreateRepositoryOutput} from '../types/CreateRepositoryOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class CreateRepositoryCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateRepositoryInput,
    OutputTypesUnion,
    CreateRepositoryOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateRepositoryInput,
        CreateRepositoryOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateRepositoryInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateRepositoryInput, CreateRepositoryOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateRepository
        };

        return stack.resolve(
            handler<CreateRepositoryInput, CreateRepositoryOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}