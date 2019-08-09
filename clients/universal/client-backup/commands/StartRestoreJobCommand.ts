import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartRestoreJob } from "../model/StartRestoreJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartRestoreJobInput } from "../types/StartRestoreJobInput";
import { StartRestoreJobOutput } from "../types/StartRestoreJobOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/StartRestoreJobInput";
export * from "../types/StartRestoreJobOutput";
export * from "../types/StartRestoreJobExceptionsUnion";

export class StartRestoreJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartRestoreJobInput,
      OutputTypesUnion,
      StartRestoreJobOutput,
      BackupResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StartRestoreJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartRestoreJobInput,
    StartRestoreJobOutput,
    Uint8Array
  >();

  constructor(readonly input: StartRestoreJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<StartRestoreJobInput, StartRestoreJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartRestoreJobInput, StartRestoreJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
