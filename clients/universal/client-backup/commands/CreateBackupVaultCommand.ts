import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateBackupVault } from "../model/CreateBackupVault";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBackupVaultInput } from "../types/CreateBackupVaultInput";
import { CreateBackupVaultOutput } from "../types/CreateBackupVaultOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/CreateBackupVaultInput";
export * from "../types/CreateBackupVaultOutput";
export * from "../types/CreateBackupVaultExceptionsUnion";

export class CreateBackupVaultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBackupVaultInput,
      OutputTypesUnion,
      CreateBackupVaultOutput,
      BackupResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateBackupVault;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBackupVaultInput,
    CreateBackupVaultOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateBackupVaultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateBackupVaultInput, CreateBackupVaultOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateBackupVaultInput, CreateBackupVaultOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
