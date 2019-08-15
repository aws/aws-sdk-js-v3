import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteReplicationGroup } from "../model/operations/DeleteReplicationGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteReplicationGroupInput } from "../types/DeleteReplicationGroupInput";
import { DeleteReplicationGroupOutput } from "../types/DeleteReplicationGroupOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DeleteReplicationGroupInput";
export * from "../types/DeleteReplicationGroupOutput";
export * from "../types/DeleteReplicationGroupExceptionsUnion";

export class DeleteReplicationGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteReplicationGroupInput,
      OutputTypesUnion,
      DeleteReplicationGroupOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteReplicationGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteReplicationGroupInput,
    DeleteReplicationGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteReplicationGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteReplicationGroupInput,
    DeleteReplicationGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteReplicationGroupInput, DeleteReplicationGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
