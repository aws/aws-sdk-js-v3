import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRemediationConfigurations } from "../model/DescribeRemediationConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRemediationConfigurationsInput } from "../types/DescribeRemediationConfigurationsInput";
import { DescribeRemediationConfigurationsOutput } from "../types/DescribeRemediationConfigurationsOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeRemediationConfigurationsInput";
export * from "../types/DescribeRemediationConfigurationsOutput";
export * from "../types/DescribeRemediationConfigurationsExceptionsUnion";

export class DescribeRemediationConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRemediationConfigurationsInput,
      OutputTypesUnion,
      DescribeRemediationConfigurationsOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeRemediationConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRemediationConfigurationsInput,
    DescribeRemediationConfigurationsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeRemediationConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRemediationConfigurationsInput,
    DescribeRemediationConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeRemediationConfigurationsInput,
        DescribeRemediationConfigurationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
