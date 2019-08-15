import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TestEventPattern } from "../model/operations/TestEventPattern";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TestEventPatternInput } from "../types/TestEventPatternInput";
import { TestEventPatternOutput } from "../types/TestEventPatternOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/TestEventPatternInput";
export * from "../types/TestEventPatternOutput";
export * from "../types/TestEventPatternExceptionsUnion";

export class TestEventPatternCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TestEventPatternInput,
      OutputTypesUnion,
      TestEventPatternOutput,
      CloudWatchEventsResolvedConfiguration,
      Blob
    > {
  readonly model = TestEventPattern;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TestEventPatternInput,
    TestEventPatternOutput,
    Blob
  >();

  constructor(readonly input: TestEventPatternInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<TestEventPatternInput, TestEventPatternOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TestEventPatternInput, TestEventPatternOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
