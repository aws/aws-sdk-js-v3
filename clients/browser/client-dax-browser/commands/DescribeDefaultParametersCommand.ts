import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDefaultParameters } from "../model/operations/DescribeDefaultParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDefaultParametersInput } from "../types/DescribeDefaultParametersInput";
import { DescribeDefaultParametersOutput } from "../types/DescribeDefaultParametersOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/DescribeDefaultParametersInput";
export * from "../types/DescribeDefaultParametersOutput";
export * from "../types/DescribeDefaultParametersExceptionsUnion";

export class DescribeDefaultParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDefaultParametersInput,
      OutputTypesUnion,
      DescribeDefaultParametersOutput,
      DAXResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDefaultParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDefaultParametersInput,
    DescribeDefaultParametersOutput,
    Blob
  >();

  constructor(readonly input: DescribeDefaultParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDefaultParametersInput,
    DescribeDefaultParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDefaultParametersInput, DescribeDefaultParametersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
