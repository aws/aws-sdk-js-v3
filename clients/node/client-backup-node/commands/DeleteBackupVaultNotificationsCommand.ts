import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBackupVaultNotifications } from "../model/operations/DeleteBackupVaultNotifications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBackupVaultNotificationsInput } from "../types/DeleteBackupVaultNotificationsInput";
import { DeleteBackupVaultNotificationsOutput } from "../types/DeleteBackupVaultNotificationsOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/DeleteBackupVaultNotificationsInput";
export * from "../types/DeleteBackupVaultNotificationsOutput";
export * from "../types/DeleteBackupVaultNotificationsExceptionsUnion";

export class DeleteBackupVaultNotificationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBackupVaultNotificationsInput,
      OutputTypesUnion,
      DeleteBackupVaultNotificationsOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBackupVaultNotifications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBackupVaultNotificationsInput,
    DeleteBackupVaultNotificationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBackupVaultNotificationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBackupVaultNotificationsInput,
    DeleteBackupVaultNotificationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteBackupVaultNotificationsInput,
        DeleteBackupVaultNotificationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
