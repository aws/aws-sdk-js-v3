import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_browser from '@aws/util-body-length-browser';
import {UpdateRepositoryDescription} from '../model/UpdateRepositoryDescription';
import {UpdateRepositoryDescriptionInput} from '../types/UpdateRepositoryDescriptionInput';
import {UpdateRepositoryDescriptionOutput} from '../types/UpdateRepositoryDescriptionOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdateRepositoryDescriptionCommand implements __aws_types.Command<
    UpdateRepositoryDescriptionInput,
    UpdateRepositoryDescriptionOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {

    constructor(readonly input: UpdateRepositoryDescriptionInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<UpdateRepositoryDescriptionInput, UpdateRepositoryDescriptionOutput, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<UpdateRepositoryDescriptionInput, UpdateRepositoryDescriptionOutput, ReadableStream> {
        const {
            handler: Handler,
            httpHandler
        } = configuration;
        const stack = clientStack.clone();

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateRepositoryDescription
        };

        const contentLengthTag = new Set();
        contentLengthTag.add('SET_CONTENT_LENGTH');
        stack.add(
            class extends __aws_middleware_content_length.ContentLengthMiddleware {
                constructor(
                    next: __aws_types.Handler<any, any, any>
                ) {
                    super(
                        __aws_util_body_length_browser.calculateBodyLength,
                        next
                    );
                }
            },
            {
                step: 'build',
                tags: contentLengthTag,
                priority: 80
            }
        );

        const coreHandler = new Handler(handlerExecutionContext);
        return stack.resolve(coreHandler, handlerExecutionContext);
    }
}