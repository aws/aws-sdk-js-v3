import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSnapshot } from "../model/operations/DeleteSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSnapshotInput } from "../types/DeleteSnapshotInput";
import { DeleteSnapshotOutput } from "../types/DeleteSnapshotOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
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
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSnapshotInput,
    DeleteSnapshotOutput,
    Blob
  >();

  constructor(readonly input: DeleteSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
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
