import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBackupSelection } from "../model/GetBackupSelection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBackupSelectionInput } from "../types/GetBackupSelectionInput";
import { GetBackupSelectionOutput } from "../types/GetBackupSelectionOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/GetBackupSelectionInput";
export * from "../types/GetBackupSelectionOutput";
export * from "../types/GetBackupSelectionExceptionsUnion";

export class GetBackupSelectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBackupSelectionInput,
      OutputTypesUnion,
      GetBackupSelectionOutput,
      BackupResolvedConfiguration,
      Blob
    > {
  readonly model = GetBackupSelection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBackupSelectionInput,
    GetBackupSelectionOutput,
    Blob
  >();

  constructor(readonly input: GetBackupSelectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBackupSelectionInput,
    GetBackupSelectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBackupSelectionInput, GetBackupSelectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
