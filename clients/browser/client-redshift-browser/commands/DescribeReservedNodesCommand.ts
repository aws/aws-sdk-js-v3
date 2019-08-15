import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeReservedNodes } from "../model/operations/DescribeReservedNodes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReservedNodesInput } from "../types/DescribeReservedNodesInput";
import { DescribeReservedNodesOutput } from "../types/DescribeReservedNodesOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeReservedNodesInput";
export * from "../types/DescribeReservedNodesOutput";
export * from "../types/DescribeReservedNodesExceptionsUnion";

export class DescribeReservedNodesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReservedNodesInput,
      OutputTypesUnion,
      DescribeReservedNodesOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeReservedNodes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReservedNodesInput,
    DescribeReservedNodesOutput,
    Blob
  >();

  constructor(readonly input: DescribeReservedNodesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReservedNodesInput,
    DescribeReservedNodesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeReservedNodesInput, DescribeReservedNodesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
