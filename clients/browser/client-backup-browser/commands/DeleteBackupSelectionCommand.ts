import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteBackupSelection } from "../model/operations/DeleteBackupSelection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBackupSelectionInput } from "../types/DeleteBackupSelectionInput";
import { DeleteBackupSelectionOutput } from "../types/DeleteBackupSelectionOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/DeleteBackupSelectionInput";
export * from "../types/DeleteBackupSelectionOutput";
export * from "../types/DeleteBackupSelectionExceptionsUnion";

export class DeleteBackupSelectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBackupSelectionInput,
      OutputTypesUnion,
      DeleteBackupSelectionOutput,
      BackupResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteBackupSelection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBackupSelectionInput,
    DeleteBackupSelectionOutput,
    Blob
  >();

  constructor(readonly input: DeleteBackupSelectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBackupSelectionInput,
    DeleteBackupSelectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBackupSelectionInput, DeleteBackupSelectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
