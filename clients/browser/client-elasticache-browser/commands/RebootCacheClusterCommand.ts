import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RebootCacheCluster } from "../model/operations/RebootCacheCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RebootCacheClusterInput } from "../types/RebootCacheClusterInput";
import { RebootCacheClusterOutput } from "../types/RebootCacheClusterOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/RebootCacheClusterInput";
export * from "../types/RebootCacheClusterOutput";
export * from "../types/RebootCacheClusterExceptionsUnion";

export class RebootCacheClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RebootCacheClusterInput,
      OutputTypesUnion,
      RebootCacheClusterOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = RebootCacheCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RebootCacheClusterInput,
    RebootCacheClusterOutput,
    Blob
  >();

  constructor(readonly input: RebootCacheClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RebootCacheClusterInput,
    RebootCacheClusterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RebootCacheClusterInput, RebootCacheClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
