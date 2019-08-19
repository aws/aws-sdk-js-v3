import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteCacheParameterGroup } from "../model/operations/DeleteCacheParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCacheParameterGroupInput } from "../types/DeleteCacheParameterGroupInput";
import { DeleteCacheParameterGroupOutput } from "../types/DeleteCacheParameterGroupOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DeleteCacheParameterGroupInput";
export * from "../types/DeleteCacheParameterGroupOutput";
export * from "../types/DeleteCacheParameterGroupExceptionsUnion";

export class DeleteCacheParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCacheParameterGroupInput,
      OutputTypesUnion,
      DeleteCacheParameterGroupOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteCacheParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCacheParameterGroupInput,
    DeleteCacheParameterGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteCacheParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCacheParameterGroupInput,
    DeleteCacheParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCacheParameterGroupInput, DeleteCacheParameterGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
