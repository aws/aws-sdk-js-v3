import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeConfigurationRecorderStatus } from "../model/DescribeConfigurationRecorderStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConfigurationRecorderStatusInput } from "../types/DescribeConfigurationRecorderStatusInput";
import { DescribeConfigurationRecorderStatusOutput } from "../types/DescribeConfigurationRecorderStatusOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeConfigurationRecorderStatusInput";
export * from "../types/DescribeConfigurationRecorderStatusOutput";
export * from "../types/DescribeConfigurationRecorderStatusExceptionsUnion";

export class DescribeConfigurationRecorderStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConfigurationRecorderStatusInput,
      OutputTypesUnion,
      DescribeConfigurationRecorderStatusOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeConfigurationRecorderStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConfigurationRecorderStatusInput,
    DescribeConfigurationRecorderStatusOutput,
    Blob
  >();

  constructor(readonly input: DescribeConfigurationRecorderStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConfigurationRecorderStatusInput,
    DescribeConfigurationRecorderStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeConfigurationRecorderStatusInput,
        DescribeConfigurationRecorderStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
