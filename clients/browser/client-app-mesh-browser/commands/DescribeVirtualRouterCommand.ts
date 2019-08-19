import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVirtualRouter } from "../model/operations/DescribeVirtualRouter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVirtualRouterInput } from "../types/DescribeVirtualRouterInput";
import { DescribeVirtualRouterOutput } from "../types/DescribeVirtualRouterOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/DescribeVirtualRouterInput";
export * from "../types/DescribeVirtualRouterOutput";
export * from "../types/DescribeVirtualRouterExceptionsUnion";

export class DescribeVirtualRouterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVirtualRouterInput,
      OutputTypesUnion,
      DescribeVirtualRouterOutput,
      AppMeshResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeVirtualRouter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVirtualRouterInput,
    DescribeVirtualRouterOutput,
    Blob
  >();

  constructor(readonly input: DescribeVirtualRouterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVirtualRouterInput,
    DescribeVirtualRouterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVirtualRouterInput, DescribeVirtualRouterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
