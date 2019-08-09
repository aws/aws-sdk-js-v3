import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeConfigurationSet } from "../model/DescribeConfigurationSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConfigurationSetInput } from "../types/DescribeConfigurationSetInput";
import { DescribeConfigurationSetOutput } from "../types/DescribeConfigurationSetOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/DescribeConfigurationSetInput";
export * from "../types/DescribeConfigurationSetOutput";
export * from "../types/DescribeConfigurationSetExceptionsUnion";

export class DescribeConfigurationSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConfigurationSetInput,
      OutputTypesUnion,
      DescribeConfigurationSetOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeConfigurationSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConfigurationSetInput,
    DescribeConfigurationSetOutput,
    Blob
  >();

  constructor(readonly input: DescribeConfigurationSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConfigurationSetInput,
    DescribeConfigurationSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeConfigurationSetInput, DescribeConfigurationSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
