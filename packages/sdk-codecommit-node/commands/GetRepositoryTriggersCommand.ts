import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
import {GetRepositoryTriggers} from '../model/GetRepositoryTriggers';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetRepositoryTriggersInput} from '../types/GetRepositoryTriggersInput';
import {GetRepositoryTriggersOutput} from '../types/GetRepositoryTriggersOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetRepositoryTriggersCommand implements __aws_types.Command<
    InputTypesUnion,
    GetRepositoryTriggersInput,
    OutputTypesUnion,
    GetRepositoryTriggersOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<GetRepositoryTriggersInput, GetRepositoryTriggersOutput, _stream.Readable>();

    constructor(readonly input: GetRepositoryTriggersInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<GetRepositoryTriggersInput, GetRepositoryTriggersOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetRepositoryTriggers
        };

        const contentLengthTag = new Set();
        contentLengthTag.add('SET_CONTENT_LENGTH');
        stack.add(
            __aws_middleware_content_length.contentLengthMiddleware(
                __aws_util_body_length_node.calculateBodyLength
            ),
            {
                step: 'build',
                tags: contentLengthTag,
                priority: -80
            }
        );

        return stack.resolve(
            handler<GetRepositoryTriggersInput, GetRepositoryTriggersOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}