import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_browser from '@aws/util-body-length-browser';
import {PutRepositoryTriggers} from '../model/PutRepositoryTriggers';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutRepositoryTriggersInput} from '../types/PutRepositoryTriggersInput';
import {PutRepositoryTriggersOutput} from '../types/PutRepositoryTriggersOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class PutRepositoryTriggersCommand implements __aws_types.Command<
    InputTypesUnion,
    PutRepositoryTriggersInput,
    OutputTypesUnion,
    PutRepositoryTriggersOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<PutRepositoryTriggersInput, PutRepositoryTriggersOutput, ReadableStream>();

    constructor(readonly input: PutRepositoryTriggersInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<PutRepositoryTriggersInput, PutRepositoryTriggersOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutRepositoryTriggers
        };

        return stack.resolve(
            handler<PutRepositoryTriggersInput, PutRepositoryTriggersOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}