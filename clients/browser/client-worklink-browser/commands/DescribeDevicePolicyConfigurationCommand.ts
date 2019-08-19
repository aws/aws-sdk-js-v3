import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDevicePolicyConfiguration } from "../model/operations/DescribeDevicePolicyConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDevicePolicyConfigurationInput } from "../types/DescribeDevicePolicyConfigurationInput";
import { DescribeDevicePolicyConfigurationOutput } from "../types/DescribeDevicePolicyConfigurationOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/DescribeDevicePolicyConfigurationInput";
export * from "../types/DescribeDevicePolicyConfigurationOutput";
export * from "../types/DescribeDevicePolicyConfigurationExceptionsUnion";

export class DescribeDevicePolicyConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDevicePolicyConfigurationInput,
      OutputTypesUnion,
      DescribeDevicePolicyConfigurationOutput,
      WorkLinkResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDevicePolicyConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDevicePolicyConfigurationInput,
    DescribeDevicePolicyConfigurationOutput,
    Blob
  >();

  constructor(readonly input: DescribeDevicePolicyConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDevicePolicyConfigurationInput,
    DescribeDevicePolicyConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDevicePolicyConfigurationInput,
        DescribeDevicePolicyConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
