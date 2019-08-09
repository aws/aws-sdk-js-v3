import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateBackupSelection } from "../model/CreateBackupSelection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBackupSelectionInput } from "../types/CreateBackupSelectionInput";
import { CreateBackupSelectionOutput } from "../types/CreateBackupSelectionOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/CreateBackupSelectionInput";
export * from "../types/CreateBackupSelectionOutput";
export * from "../types/CreateBackupSelectionExceptionsUnion";

export class CreateBackupSelectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBackupSelectionInput,
      OutputTypesUnion,
      CreateBackupSelectionOutput,
      BackupResolvedConfiguration,
      Blob
    > {
  readonly model = CreateBackupSelection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBackupSelectionInput,
    CreateBackupSelectionOutput,
    Blob
  >();

  constructor(readonly input: CreateBackupSelectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateBackupSelectionInput,
    CreateBackupSelectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateBackupSelectionInput, CreateBackupSelectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
