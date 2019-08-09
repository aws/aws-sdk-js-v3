import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDBSnapshot } from "../model/DeleteDBSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDBSnapshotInput } from "../types/DeleteDBSnapshotInput";
import { DeleteDBSnapshotOutput } from "../types/DeleteDBSnapshotOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DeleteDBSnapshotInput";
export * from "../types/DeleteDBSnapshotOutput";
export * from "../types/DeleteDBSnapshotExceptionsUnion";

export class DeleteDBSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDBSnapshotInput,
      OutputTypesUnion,
      DeleteDBSnapshotOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDBSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDBSnapshotInput,
    DeleteDBSnapshotOutput,
    Blob
  >();

  constructor(readonly input: DeleteDBSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDBSnapshotInput, DeleteDBSnapshotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDBSnapshotInput, DeleteDBSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
