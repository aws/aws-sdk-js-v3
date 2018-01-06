import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_browser from '@aws/util-body-length-browser';
import {UpdateRepositoryName} from '../model/UpdateRepositoryName';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateRepositoryNameInput} from '../types/UpdateRepositoryNameInput';
import {UpdateRepositoryNameOutput} from '../types/UpdateRepositoryNameOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdateRepositoryNameCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdateRepositoryNameInput,
    OutputTypesUnion,
    UpdateRepositoryNameOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<UpdateRepositoryNameInput, UpdateRepositoryNameOutput, ReadableStream>();

    constructor(readonly input: UpdateRepositoryNameInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<UpdateRepositoryNameInput, UpdateRepositoryNameOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateRepositoryName
        };

        return stack.resolve(
            handler<UpdateRepositoryNameInput, UpdateRepositoryNameOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}