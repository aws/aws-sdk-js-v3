import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeHsmConfigurations } from "../model/operations/DescribeHsmConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeHsmConfigurationsInput } from "../types/DescribeHsmConfigurationsInput";
import { DescribeHsmConfigurationsOutput } from "../types/DescribeHsmConfigurationsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeHsmConfigurationsInput";
export * from "../types/DescribeHsmConfigurationsOutput";
export * from "../types/DescribeHsmConfigurationsExceptionsUnion";

export class DescribeHsmConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeHsmConfigurationsInput,
      OutputTypesUnion,
      DescribeHsmConfigurationsOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeHsmConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeHsmConfigurationsInput,
    DescribeHsmConfigurationsOutput,
    Blob
  >();

  constructor(readonly input: DescribeHsmConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeHsmConfigurationsInput,
    DescribeHsmConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeHsmConfigurationsInput, DescribeHsmConfigurationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
