import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateCacheCluster } from "../model/operations/CreateCacheCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCacheClusterInput } from "../types/CreateCacheClusterInput";
import { CreateCacheClusterOutput } from "../types/CreateCacheClusterOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/CreateCacheClusterInput";
export * from "../types/CreateCacheClusterOutput";
export * from "../types/CreateCacheClusterExceptionsUnion";

export class CreateCacheClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCacheClusterInput,
      OutputTypesUnion,
      CreateCacheClusterOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = CreateCacheCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCacheClusterInput,
    CreateCacheClusterOutput,
    Blob
  >();

  constructor(readonly input: CreateCacheClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCacheClusterInput,
    CreateCacheClusterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCacheClusterInput, CreateCacheClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
