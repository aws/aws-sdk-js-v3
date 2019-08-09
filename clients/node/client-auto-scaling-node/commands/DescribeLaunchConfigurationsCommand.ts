import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLaunchConfigurations } from "../model/DescribeLaunchConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLaunchConfigurationsInput } from "../types/DescribeLaunchConfigurationsInput";
import { DescribeLaunchConfigurationsOutput } from "../types/DescribeLaunchConfigurationsOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DescribeLaunchConfigurationsInput";
export * from "../types/DescribeLaunchConfigurationsOutput";
export * from "../types/DescribeLaunchConfigurationsExceptionsUnion";

export class DescribeLaunchConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLaunchConfigurationsInput,
      OutputTypesUnion,
      DescribeLaunchConfigurationsOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLaunchConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLaunchConfigurationsInput,
    DescribeLaunchConfigurationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLaunchConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLaunchConfigurationsInput,
    DescribeLaunchConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeLaunchConfigurationsInput,
        DescribeLaunchConfigurationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
