import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeNotificationConfigurations } from "../model/DescribeNotificationConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeNotificationConfigurationsInput } from "../types/DescribeNotificationConfigurationsInput";
import { DescribeNotificationConfigurationsOutput } from "../types/DescribeNotificationConfigurationsOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DescribeNotificationConfigurationsInput";
export * from "../types/DescribeNotificationConfigurationsOutput";
export * from "../types/DescribeNotificationConfigurationsExceptionsUnion";

export class DescribeNotificationConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeNotificationConfigurationsInput,
      OutputTypesUnion,
      DescribeNotificationConfigurationsOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeNotificationConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeNotificationConfigurationsInput,
    DescribeNotificationConfigurationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeNotificationConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeNotificationConfigurationsInput,
    DescribeNotificationConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeNotificationConfigurationsInput,
        DescribeNotificationConfigurationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
