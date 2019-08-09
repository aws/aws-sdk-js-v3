import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeComputeEnvironments } from "../model/DescribeComputeEnvironments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeComputeEnvironmentsInput } from "../types/DescribeComputeEnvironmentsInput";
import { DescribeComputeEnvironmentsOutput } from "../types/DescribeComputeEnvironmentsOutput";
import { BatchResolvedConfiguration } from "../BatchConfiguration";
export * from "../types/DescribeComputeEnvironmentsInput";
export * from "../types/DescribeComputeEnvironmentsOutput";
export * from "../types/DescribeComputeEnvironmentsExceptionsUnion";

export class DescribeComputeEnvironmentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeComputeEnvironmentsInput,
      OutputTypesUnion,
      DescribeComputeEnvironmentsOutput,
      BatchResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeComputeEnvironments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeComputeEnvironmentsInput,
    DescribeComputeEnvironmentsOutput,
    Blob
  >();

  constructor(readonly input: DescribeComputeEnvironmentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeComputeEnvironmentsInput,
    DescribeComputeEnvironmentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeComputeEnvironmentsInput,
        DescribeComputeEnvironmentsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
