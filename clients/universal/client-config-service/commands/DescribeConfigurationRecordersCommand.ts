import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeConfigurationRecorders } from "../model/DescribeConfigurationRecorders";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConfigurationRecordersInput } from "../types/DescribeConfigurationRecordersInput";
import { DescribeConfigurationRecordersOutput } from "../types/DescribeConfigurationRecordersOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeConfigurationRecordersInput";
export * from "../types/DescribeConfigurationRecordersOutput";
export * from "../types/DescribeConfigurationRecordersExceptionsUnion";

export class DescribeConfigurationRecordersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConfigurationRecordersInput,
      OutputTypesUnion,
      DescribeConfigurationRecordersOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeConfigurationRecorders;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConfigurationRecordersInput,
    DescribeConfigurationRecordersOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeConfigurationRecordersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConfigurationRecordersInput,
    DescribeConfigurationRecordersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeConfigurationRecordersInput,
        DescribeConfigurationRecordersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
