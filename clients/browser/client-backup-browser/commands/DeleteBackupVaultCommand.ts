import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteBackupVault } from "../model/DeleteBackupVault";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBackupVaultInput } from "../types/DeleteBackupVaultInput";
import { DeleteBackupVaultOutput } from "../types/DeleteBackupVaultOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/DeleteBackupVaultInput";
export * from "../types/DeleteBackupVaultOutput";
export * from "../types/DeleteBackupVaultExceptionsUnion";

export class DeleteBackupVaultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBackupVaultInput,
      OutputTypesUnion,
      DeleteBackupVaultOutput,
      BackupResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteBackupVault;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBackupVaultInput,
    DeleteBackupVaultOutput,
    Blob
  >();

  constructor(readonly input: DeleteBackupVaultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteBackupVaultInput, DeleteBackupVaultOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBackupVaultInput, DeleteBackupVaultOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
