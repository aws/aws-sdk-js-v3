import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSnapshot } from "../model/DeleteSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSnapshotInput } from "../types/DeleteSnapshotInput";
import { DeleteSnapshotOutput } from "../types/DeleteSnapshotOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DeleteSnapshotInput";
export * from "../types/DeleteSnapshotOutput";
export * from "../types/DeleteSnapshotExceptionsUnion";

export class DeleteSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSnapshotInput,
      OutputTypesUnion,
      DeleteSnapshotOutput,
      ElastiCacheResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSnapshotInput,
    DeleteSnapshotOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteSnapshotInput, DeleteSnapshotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSnapshotInput, DeleteSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
