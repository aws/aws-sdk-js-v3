import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_browser from '@aws/util-body-length-browser';
import {ListBranches} from '../model/ListBranches';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListBranchesInput} from '../types/ListBranchesInput';
import {ListBranchesOutput} from '../types/ListBranchesOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class ListBranchesCommand implements __aws_types.Command<
    InputTypesUnion,
    ListBranchesInput,
    OutputTypesUnion,
    ListBranchesOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<ListBranchesInput, ListBranchesOutput, ReadableStream>();

    constructor(readonly input: ListBranchesInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<ListBranchesInput, ListBranchesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListBranches
        };

        const contentLengthTag = new Set();
        contentLengthTag.add('SET_CONTENT_LENGTH');
        stack.add(
            __aws_middleware_content_length.contentLengthMiddleware(
                __aws_util_body_length_browser.calculateBodyLength
            ),
            {
                step: 'build',
                tags: contentLengthTag,
                priority: -80
            }
        );

        return stack.resolve(
            handler<ListBranchesInput, ListBranchesOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}