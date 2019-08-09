import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteCacheCluster } from "../model/DeleteCacheCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCacheClusterInput } from "../types/DeleteCacheClusterInput";
import { DeleteCacheClusterOutput } from "../types/DeleteCacheClusterOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DeleteCacheClusterInput";
export * from "../types/DeleteCacheClusterOutput";
export * from "../types/DeleteCacheClusterExceptionsUnion";

export class DeleteCacheClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCacheClusterInput,
      OutputTypesUnion,
      DeleteCacheClusterOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteCacheCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCacheClusterInput,
    DeleteCacheClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteCacheClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCacheClusterInput,
    DeleteCacheClusterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCacheClusterInput, DeleteCacheClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
