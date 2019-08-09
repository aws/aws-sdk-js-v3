import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeImageAttribute } from "../model/DescribeImageAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeImageAttributeInput } from "../types/DescribeImageAttributeInput";
import { DescribeImageAttributeOutput } from "../types/DescribeImageAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeImageAttributeInput";
export * from "../types/DescribeImageAttributeOutput";
export * from "../types/DescribeImageAttributeExceptionsUnion";

export class DescribeImageAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeImageAttributeInput,
      OutputTypesUnion,
      DescribeImageAttributeOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeImageAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeImageAttributeInput,
    DescribeImageAttributeOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeImageAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeImageAttributeInput,
    DescribeImageAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeImageAttributeInput, DescribeImageAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
