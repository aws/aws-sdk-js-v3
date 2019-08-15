import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEventConfigurations } from "../model/operations/DescribeEventConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEventConfigurationsInput } from "../types/DescribeEventConfigurationsInput";
import { DescribeEventConfigurationsOutput } from "../types/DescribeEventConfigurationsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeEventConfigurationsInput";
export * from "../types/DescribeEventConfigurationsOutput";
export * from "../types/DescribeEventConfigurationsExceptionsUnion";

export class DescribeEventConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEventConfigurationsInput,
      OutputTypesUnion,
      DescribeEventConfigurationsOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeEventConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEventConfigurationsInput,
    DescribeEventConfigurationsOutput,
    Blob
  >();

  constructor(readonly input: DescribeEventConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEventConfigurationsInput,
    DescribeEventConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeEventConfigurationsInput,
        DescribeEventConfigurationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
