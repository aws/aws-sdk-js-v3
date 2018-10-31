import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {UpdateRepositoryName} from '../model/UpdateRepositoryName';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateRepositoryNameInput} from '../types/UpdateRepositoryNameInput';
import {UpdateRepositoryNameOutput} from '../types/UpdateRepositoryNameOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdateRepositoryNameCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateRepositoryNameInput,
    OutputTypesUnion,
    UpdateRepositoryNameOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateRepositoryNameInput,
        UpdateRepositoryNameOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdateRepositoryNameInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateRepositoryNameInput, UpdateRepositoryNameOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateRepositoryName
        };

        return stack.resolve(
            handler<UpdateRepositoryNameInput, UpdateRepositoryNameOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}