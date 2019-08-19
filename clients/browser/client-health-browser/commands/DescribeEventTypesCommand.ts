import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEventTypes } from "../model/operations/DescribeEventTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEventTypesInput } from "../types/DescribeEventTypesInput";
import { DescribeEventTypesOutput } from "../types/DescribeEventTypesOutput";
import { HealthResolvedConfiguration } from "../HealthConfiguration";
export * from "../types/DescribeEventTypesInput";
export * from "../types/DescribeEventTypesOutput";
export * from "../types/DescribeEventTypesExceptionsUnion";

export class DescribeEventTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEventTypesInput,
      OutputTypesUnion,
      DescribeEventTypesOutput,
      HealthResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeEventTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEventTypesInput,
    DescribeEventTypesOutput,
    Blob
  >();

  constructor(readonly input: DescribeEventTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: HealthResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEventTypesInput,
    DescribeEventTypesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEventTypesInput, DescribeEventTypesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
