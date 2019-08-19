import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopBackupJob } from "../model/operations/StopBackupJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopBackupJobInput } from "../types/StopBackupJobInput";
import { StopBackupJobOutput } from "../types/StopBackupJobOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/StopBackupJobInput";
export * from "../types/StopBackupJobOutput";
export * from "../types/StopBackupJobExceptionsUnion";

export class StopBackupJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopBackupJobInput,
      OutputTypesUnion,
      StopBackupJobOutput,
      BackupResolvedConfiguration,
      Blob
    > {
  readonly model = StopBackupJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopBackupJobInput,
    StopBackupJobOutput,
    Blob
  >();

  constructor(readonly input: StopBackupJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<StopBackupJobInput, StopBackupJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopBackupJobInput, StopBackupJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
