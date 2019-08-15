import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ResetCacheParameterGroup } from "../model/operations/ResetCacheParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetCacheParameterGroupInput } from "../types/ResetCacheParameterGroupInput";
import { ResetCacheParameterGroupOutput } from "../types/ResetCacheParameterGroupOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/ResetCacheParameterGroupInput";
export * from "../types/ResetCacheParameterGroupOutput";
export * from "../types/ResetCacheParameterGroupExceptionsUnion";

export class ResetCacheParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetCacheParameterGroupInput,
      OutputTypesUnion,
      ResetCacheParameterGroupOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = ResetCacheParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetCacheParameterGroupInput,
    ResetCacheParameterGroupOutput,
    Blob
  >();

  constructor(readonly input: ResetCacheParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResetCacheParameterGroupInput,
    ResetCacheParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetCacheParameterGroupInput, ResetCacheParameterGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
