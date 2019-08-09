import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyCacheSubnetGroup } from "../model/ModifyCacheSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyCacheSubnetGroupInput } from "../types/ModifyCacheSubnetGroupInput";
import { ModifyCacheSubnetGroupOutput } from "../types/ModifyCacheSubnetGroupOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/ModifyCacheSubnetGroupInput";
export * from "../types/ModifyCacheSubnetGroupOutput";
export * from "../types/ModifyCacheSubnetGroupExceptionsUnion";

export class ModifyCacheSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyCacheSubnetGroupInput,
      OutputTypesUnion,
      ModifyCacheSubnetGroupOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyCacheSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyCacheSubnetGroupInput,
    ModifyCacheSubnetGroupOutput,
    Blob
  >();

  constructor(readonly input: ModifyCacheSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyCacheSubnetGroupInput,
    ModifyCacheSubnetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyCacheSubnetGroupInput, ModifyCacheSubnetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
