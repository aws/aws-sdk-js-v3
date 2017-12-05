import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
import {DeleteBranch} from '../model/DeleteBranch';
import {DeleteBranchInput} from '../types/DeleteBranchInput';
import {DeleteBranchOutput} from '../types/DeleteBranchOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class DeleteBranchCommand implements __aws_types.Command<
    DeleteBranchInput,
    DeleteBranchOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {

    constructor(readonly input: DeleteBranchInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<DeleteBranchInput, DeleteBranchOutput, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<DeleteBranchInput, DeleteBranchOutput, _stream.Readable> {
        const {
            handler: Handler,
            httpHandler
        } = configuration;
        const stack = clientStack.clone();

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteBranch
        };

        const contentLengthTag = new Set();
        contentLengthTag.add('SET_CONTENT_LENGTH');
        stack.add(
            class extends __aws_middleware_content_length.ContentLengthMiddleware {
                constructor(
                    next: __aws_types.Handler<any, any, any>
                ) {
                    super(
                        __aws_util_body_length_node.calculateBodyLength,
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