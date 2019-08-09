import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyReplicationGroup } from "../model/ModifyReplicationGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyReplicationGroupInput } from "../types/ModifyReplicationGroupInput";
import { ModifyReplicationGroupOutput } from "../types/ModifyReplicationGroupOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/ModifyReplicationGroupInput";
export * from "../types/ModifyReplicationGroupOutput";
export * from "../types/ModifyReplicationGroupExceptionsUnion";

export class ModifyReplicationGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyReplicationGroupInput,
      OutputTypesUnion,
      ModifyReplicationGroupOutput,
      ElastiCacheResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyReplicationGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyReplicationGroupInput,
    ModifyReplicationGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyReplicationGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyReplicationGroupInput,
    ModifyReplicationGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyReplicationGroupInput, ModifyReplicationGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
