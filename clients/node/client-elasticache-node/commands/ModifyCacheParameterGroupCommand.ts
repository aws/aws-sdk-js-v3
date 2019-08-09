import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyCacheParameterGroup } from "../model/ModifyCacheParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyCacheParameterGroupInput } from "../types/ModifyCacheParameterGroupInput";
import { ModifyCacheParameterGroupOutput } from "../types/ModifyCacheParameterGroupOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/ModifyCacheParameterGroupInput";
export * from "../types/ModifyCacheParameterGroupOutput";
export * from "../types/ModifyCacheParameterGroupExceptionsUnion";

export class ModifyCacheParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyCacheParameterGroupInput,
      OutputTypesUnion,
      ModifyCacheParameterGroupOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyCacheParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyCacheParameterGroupInput,
    ModifyCacheParameterGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyCacheParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyCacheParameterGroupInput,
    ModifyCacheParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyCacheParameterGroupInput, ModifyCacheParameterGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
