import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
import {TestRepositoryTriggers} from '../model/TestRepositoryTriggers';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {TestRepositoryTriggersInput} from '../types/TestRepositoryTriggersInput';
import {TestRepositoryTriggersOutput} from '../types/TestRepositoryTriggersOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class TestRepositoryTriggersCommand implements __aws_types.Command<
    InputTypesUnion,
    TestRepositoryTriggersInput,
    OutputTypesUnion,
    TestRepositoryTriggersOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<TestRepositoryTriggersInput, TestRepositoryTriggersOutput, _stream.Readable>();

    constructor(readonly input: TestRepositoryTriggersInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<TestRepositoryTriggersInput, TestRepositoryTriggersOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: TestRepositoryTriggers
        };

        return stack.resolve(
            handler<TestRepositoryTriggersInput, TestRepositoryTriggersOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}