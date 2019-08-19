import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResizeCluster } from "../model/operations/ResizeCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResizeClusterInput } from "../types/ResizeClusterInput";
import { ResizeClusterOutput } from "../types/ResizeClusterOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/ResizeClusterInput";
export * from "../types/ResizeClusterOutput";
export * from "../types/ResizeClusterExceptionsUnion";

export class ResizeClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResizeClusterInput,
      OutputTypesUnion,
      ResizeClusterOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResizeCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResizeClusterInput,
    ResizeClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResizeClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<ResizeClusterInput, ResizeClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResizeClusterInput, ResizeClusterOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
