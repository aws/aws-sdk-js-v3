import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAccelerator } from "../model/DescribeAccelerator";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAcceleratorInput } from "../types/DescribeAcceleratorInput";
import { DescribeAcceleratorOutput } from "../types/DescribeAcceleratorOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/DescribeAcceleratorInput";
export * from "../types/DescribeAcceleratorOutput";
export * from "../types/DescribeAcceleratorExceptionsUnion";

export class DescribeAcceleratorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAcceleratorInput,
      OutputTypesUnion,
      DescribeAcceleratorOutput,
      GlobalAcceleratorResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeAccelerator;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAcceleratorInput,
    DescribeAcceleratorOutput,
    Blob
  >();

  constructor(readonly input: DescribeAcceleratorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAcceleratorInput,
    DescribeAcceleratorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAcceleratorInput, DescribeAcceleratorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
