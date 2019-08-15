import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVirtualNode } from "../model/operations/DescribeVirtualNode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVirtualNodeInput } from "../types/DescribeVirtualNodeInput";
import { DescribeVirtualNodeOutput } from "../types/DescribeVirtualNodeOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/DescribeVirtualNodeInput";
export * from "../types/DescribeVirtualNodeOutput";
export * from "../types/DescribeVirtualNodeExceptionsUnion";

export class DescribeVirtualNodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVirtualNodeInput,
      OutputTypesUnion,
      DescribeVirtualNodeOutput,
      AppMeshResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeVirtualNode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVirtualNodeInput,
    DescribeVirtualNodeOutput,
    Blob
  >();

  constructor(readonly input: DescribeVirtualNodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVirtualNodeInput,
    DescribeVirtualNodeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVirtualNodeInput, DescribeVirtualNodeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
