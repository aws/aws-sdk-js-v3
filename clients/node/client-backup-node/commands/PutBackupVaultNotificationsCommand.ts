import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutBackupVaultNotifications } from "../model/PutBackupVaultNotifications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutBackupVaultNotificationsInput } from "../types/PutBackupVaultNotificationsInput";
import { PutBackupVaultNotificationsOutput } from "../types/PutBackupVaultNotificationsOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/PutBackupVaultNotificationsInput";
export * from "../types/PutBackupVaultNotificationsOutput";
export * from "../types/PutBackupVaultNotificationsExceptionsUnion";

export class PutBackupVaultNotificationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutBackupVaultNotificationsInput,
      OutputTypesUnion,
      PutBackupVaultNotificationsOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutBackupVaultNotifications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutBackupVaultNotificationsInput,
    PutBackupVaultNotificationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutBackupVaultNotificationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutBackupVaultNotificationsInput,
    PutBackupVaultNotificationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutBackupVaultNotificationsInput,
        PutBackupVaultNotificationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
