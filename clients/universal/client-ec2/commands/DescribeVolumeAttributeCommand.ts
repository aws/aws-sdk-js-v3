import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVolumeAttribute } from "../model/DescribeVolumeAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVolumeAttributeInput } from "../types/DescribeVolumeAttributeInput";
import { DescribeVolumeAttributeOutput } from "../types/DescribeVolumeAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVolumeAttributeInput";
export * from "../types/DescribeVolumeAttributeOutput";
export * from "../types/DescribeVolumeAttributeExceptionsUnion";

export class DescribeVolumeAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVolumeAttributeInput,
      OutputTypesUnion,
      DescribeVolumeAttributeOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeVolumeAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVolumeAttributeInput,
    DescribeVolumeAttributeOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeVolumeAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVolumeAttributeInput,
    DescribeVolumeAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVolumeAttributeInput, DescribeVolumeAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
