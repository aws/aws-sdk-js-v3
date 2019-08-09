import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TestFailover } from "../model/TestFailover";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TestFailoverInput } from "../types/TestFailoverInput";
import { TestFailoverOutput } from "../types/TestFailoverOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/TestFailoverInput";
export * from "../types/TestFailoverOutput";
export * from "../types/TestFailoverExceptionsUnion";

export class TestFailoverCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TestFailoverInput,
      OutputTypesUnion,
      TestFailoverOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = TestFailover;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TestFailoverInput,
    TestFailoverOutput,
    Blob
  >();

  constructor(readonly input: TestFailoverInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<TestFailoverInput, TestFailoverOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TestFailoverInput, TestFailoverOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
