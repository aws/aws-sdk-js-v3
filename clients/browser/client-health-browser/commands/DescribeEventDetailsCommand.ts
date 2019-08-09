import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEventDetails } from "../model/DescribeEventDetails";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEventDetailsInput } from "../types/DescribeEventDetailsInput";
import { DescribeEventDetailsOutput } from "../types/DescribeEventDetailsOutput";
import { HealthResolvedConfiguration } from "../HealthConfiguration";
export * from "../types/DescribeEventDetailsInput";
export * from "../types/DescribeEventDetailsOutput";
export * from "../types/DescribeEventDetailsExceptionsUnion";

export class DescribeEventDetailsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEventDetailsInput,
      OutputTypesUnion,
      DescribeEventDetailsOutput,
      HealthResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeEventDetails;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEventDetailsInput,
    DescribeEventDetailsOutput,
    Blob
  >();

  constructor(readonly input: DescribeEventDetailsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: HealthResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEventDetailsInput,
    DescribeEventDetailsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEventDetailsInput, DescribeEventDetailsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
