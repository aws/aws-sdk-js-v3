import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDBInstanceAutomatedBackup } from "../model/DeleteDBInstanceAutomatedBackup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDBInstanceAutomatedBackupInput } from "../types/DeleteDBInstanceAutomatedBackupInput";
import { DeleteDBInstanceAutomatedBackupOutput } from "../types/DeleteDBInstanceAutomatedBackupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DeleteDBInstanceAutomatedBackupInput";
export * from "../types/DeleteDBInstanceAutomatedBackupOutput";
export * from "../types/DeleteDBInstanceAutomatedBackupExceptionsUnion";

export class DeleteDBInstanceAutomatedBackupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDBInstanceAutomatedBackupInput,
      OutputTypesUnion,
      DeleteDBInstanceAutomatedBackupOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDBInstanceAutomatedBackup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDBInstanceAutomatedBackupInput,
    DeleteDBInstanceAutomatedBackupOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDBInstanceAutomatedBackupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDBInstanceAutomatedBackupInput,
    DeleteDBInstanceAutomatedBackupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteDBInstanceAutomatedBackupInput,
        DeleteDBInstanceAutomatedBackupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
