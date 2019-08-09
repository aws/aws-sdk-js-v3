import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAcceleratorAttributes } from "../model/DescribeAcceleratorAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAcceleratorAttributesInput } from "../types/DescribeAcceleratorAttributesInput";
import { DescribeAcceleratorAttributesOutput } from "../types/DescribeAcceleratorAttributesOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/DescribeAcceleratorAttributesInput";
export * from "../types/DescribeAcceleratorAttributesOutput";
export * from "../types/DescribeAcceleratorAttributesExceptionsUnion";

export class DescribeAcceleratorAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAcceleratorAttributesInput,
      OutputTypesUnion,
      DescribeAcceleratorAttributesOutput,
      GlobalAcceleratorResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeAcceleratorAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAcceleratorAttributesInput,
    DescribeAcceleratorAttributesOutput,
    Blob
  >();

  constructor(readonly input: DescribeAcceleratorAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAcceleratorAttributesInput,
    DescribeAcceleratorAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAcceleratorAttributesInput,
        DescribeAcceleratorAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
