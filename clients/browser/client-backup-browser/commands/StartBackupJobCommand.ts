import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartBackupJob } from "../model/StartBackupJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartBackupJobInput } from "../types/StartBackupJobInput";
import { StartBackupJobOutput } from "../types/StartBackupJobOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/StartBackupJobInput";
export * from "../types/StartBackupJobOutput";
export * from "../types/StartBackupJobExceptionsUnion";

export class StartBackupJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartBackupJobInput,
      OutputTypesUnion,
      StartBackupJobOutput,
      BackupResolvedConfiguration,
      Blob
    > {
  readonly model = StartBackupJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartBackupJobInput,
    StartBackupJobOutput,
    Blob
  >();

  constructor(readonly input: StartBackupJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<StartBackupJobInput, StartBackupJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartBackupJobInput, StartBackupJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
