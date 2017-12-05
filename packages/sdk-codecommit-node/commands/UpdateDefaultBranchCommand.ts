import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
import {UpdateDefaultBranch} from '../model/UpdateDefaultBranch';
import {UpdateDefaultBranchInput} from '../types/UpdateDefaultBranchInput';
import {UpdateDefaultBranchOutput} from '../types/UpdateDefaultBranchOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdateDefaultBranchCommand implements __aws_types.Command<
    UpdateDefaultBranchInput,
    UpdateDefaultBranchOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {

    constructor(readonly input: UpdateDefaultBranchInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<UpdateDefaultBranchInput, UpdateDefaultBranchOutput, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<UpdateDefaultBranchInput, UpdateDefaultBranchOutput, _stream.Readable> {
        const {
            handler: Handler,
            httpHandler
        } = configuration;
        const stack = clientStack.clone();

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateDefaultBranch
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