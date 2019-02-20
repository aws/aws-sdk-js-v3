import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {TestRepositoryTriggers} from '../model/TestRepositoryTriggers';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {TestRepositoryTriggersInput} from '../types/TestRepositoryTriggersInput';
import {TestRepositoryTriggersOutput} from '../types/TestRepositoryTriggersOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';
export * from '../types/TestRepositoryTriggersInput';
export * from '../types/TestRepositoryTriggersOutput';
export * from '../types/TestRepositoryTriggersExceptionsUnion';

export class TestRepositoryTriggersCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    TestRepositoryTriggersInput,
    OutputTypesUnion,
    TestRepositoryTriggersOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        TestRepositoryTriggersInput,
        TestRepositoryTriggersOutput,
        _stream.Readable
    >();

    constructor(readonly input: TestRepositoryTriggersInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<TestRepositoryTriggersInput, TestRepositoryTriggersOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: TestRepositoryTriggers
        };

        return stack.resolve(
            handler<TestRepositoryTriggersInput, TestRepositoryTriggersOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}