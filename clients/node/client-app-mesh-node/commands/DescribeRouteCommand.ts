import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeRoute } from "../model/operations/DescribeRoute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRouteInput } from "../types/DescribeRouteInput";
import { DescribeRouteOutput } from "../types/DescribeRouteOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/DescribeRouteInput";
export * from "../types/DescribeRouteOutput";
export * from "../types/DescribeRouteExceptionsUnion";

export class DescribeRouteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRouteInput,
      OutputTypesUnion,
      DescribeRouteOutput,
      AppMeshResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRouteInput,
    DescribeRouteOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeRouteInput, DescribeRouteOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRouteInput, DescribeRouteOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
