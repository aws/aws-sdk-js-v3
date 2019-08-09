import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyReplicationGroupShardConfiguration } from "../model/ModifyReplicationGroupShardConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyReplicationGroupShardConfigurationInput } from "../types/ModifyReplicationGroupShardConfigurationInput";
import { ModifyReplicationGroupShardConfigurationOutput } from "../types/ModifyReplicationGroupShardConfigurationOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/ModifyReplicationGroupShardConfigurationInput";
export * from "../types/ModifyReplicationGroupShardConfigurationOutput";
export * from "../types/ModifyReplicationGroupShardConfigurationExceptionsUnion";

export class ModifyReplicationGroupShardConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyReplicationGroupShardConfigurationInput,
      OutputTypesUnion,
      ModifyReplicationGroupShardConfigurationOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyReplicationGroupShardConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyReplicationGroupShardConfigurationInput,
    ModifyReplicationGroupShardConfigurationOutput,
    Blob
  >();

  constructor(readonly input: ModifyReplicationGroupShardConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyReplicationGroupShardConfigurationInput,
    ModifyReplicationGroupShardConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyReplicationGroupShardConfigurationInput,
        ModifyReplicationGroupShardConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
