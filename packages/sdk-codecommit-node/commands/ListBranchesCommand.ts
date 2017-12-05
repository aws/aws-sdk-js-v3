import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
import {ListBranches} from '../model/ListBranches';
import {ListBranchesInput} from '../types/ListBranchesInput';
import {ListBranchesOutput} from '../types/ListBranchesOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class ListBranchesCommand implements __aws_types.Command<
    ListBranchesInput,
    ListBranchesOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {

    constructor(readonly input: ListBranchesInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<ListBranchesInput, ListBranchesOutput, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<ListBranchesInput, ListBranchesOutput, _stream.Readable> {
        const {
            handler: Handler,
            httpHandler
        } = configuration;
        const stack = clientStack.clone();

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListBranches
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