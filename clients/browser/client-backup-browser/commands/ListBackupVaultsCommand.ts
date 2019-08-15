import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListBackupVaults } from "../model/operations/ListBackupVaults";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBackupVaultsInput } from "../types/ListBackupVaultsInput";
import { ListBackupVaultsOutput } from "../types/ListBackupVaultsOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/ListBackupVaultsInput";
export * from "../types/ListBackupVaultsOutput";
export * from "../types/ListBackupVaultsExceptionsUnion";

export class ListBackupVaultsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBackupVaultsInput,
      OutputTypesUnion,
      ListBackupVaultsOutput,
      BackupResolvedConfiguration,
      Blob
    > {
  readonly model = ListBackupVaults;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBackupVaultsInput,
    ListBackupVaultsOutput,
    Blob
  >();

  constructor(readonly input: ListBackupVaultsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<ListBackupVaultsInput, ListBackupVaultsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBackupVaultsInput, ListBackupVaultsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
