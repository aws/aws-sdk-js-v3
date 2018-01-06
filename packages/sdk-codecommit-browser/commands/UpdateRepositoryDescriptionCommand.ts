import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_browser from '@aws/util-body-length-browser';
import {UpdateRepositoryDescription} from '../model/UpdateRepositoryDescription';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateRepositoryDescriptionInput} from '../types/UpdateRepositoryDescriptionInput';
import {UpdateRepositoryDescriptionOutput} from '../types/UpdateRepositoryDescriptionOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdateRepositoryDescriptionCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdateRepositoryDescriptionInput,
    OutputTypesUnion,
    UpdateRepositoryDescriptionOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<UpdateRepositoryDescriptionInput, UpdateRepositoryDescriptionOutput, ReadableStream>();

    constructor(readonly input: UpdateRepositoryDescriptionInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<UpdateRepositoryDescriptionInput, UpdateRepositoryDescriptionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateRepositoryDescription
        };

        return stack.resolve(
            handler<UpdateRepositoryDescriptionInput, UpdateRepositoryDescriptionOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}