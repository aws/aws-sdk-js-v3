import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEnvironments } from "../model/DescribeEnvironments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEnvironmentsInput } from "../types/DescribeEnvironmentsInput";
import { DescribeEnvironmentsOutput } from "../types/DescribeEnvironmentsOutput";
import { Cloud9ResolvedConfiguration } from "../Cloud9Configuration";
export * from "../types/DescribeEnvironmentsInput";
export * from "../types/DescribeEnvironmentsOutput";
export * from "../types/DescribeEnvironmentsExceptionsUnion";

export class DescribeEnvironmentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEnvironmentsInput,
      OutputTypesUnion,
      DescribeEnvironmentsOutput,
      Cloud9ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeEnvironments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEnvironmentsInput,
    DescribeEnvironmentsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeEnvironmentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Cloud9ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEnvironmentsInput,
    DescribeEnvironmentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEnvironmentsInput, DescribeEnvironmentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
