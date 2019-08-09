import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEnvironmentStatus } from "../model/DescribeEnvironmentStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEnvironmentStatusInput } from "../types/DescribeEnvironmentStatusInput";
import { DescribeEnvironmentStatusOutput } from "../types/DescribeEnvironmentStatusOutput";
import { Cloud9ResolvedConfiguration } from "../Cloud9Configuration";
export * from "../types/DescribeEnvironmentStatusInput";
export * from "../types/DescribeEnvironmentStatusOutput";
export * from "../types/DescribeEnvironmentStatusExceptionsUnion";

export class DescribeEnvironmentStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEnvironmentStatusInput,
      OutputTypesUnion,
      DescribeEnvironmentStatusOutput,
      Cloud9ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeEnvironmentStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEnvironmentStatusInput,
    DescribeEnvironmentStatusOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeEnvironmentStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Cloud9ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEnvironmentStatusInput,
    DescribeEnvironmentStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEnvironmentStatusInput, DescribeEnvironmentStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
