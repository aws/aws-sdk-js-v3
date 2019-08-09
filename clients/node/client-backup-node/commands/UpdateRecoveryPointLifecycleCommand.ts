import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateRecoveryPointLifecycle } from "../model/UpdateRecoveryPointLifecycle";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRecoveryPointLifecycleInput } from "../types/UpdateRecoveryPointLifecycleInput";
import { UpdateRecoveryPointLifecycleOutput } from "../types/UpdateRecoveryPointLifecycleOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/UpdateRecoveryPointLifecycleInput";
export * from "../types/UpdateRecoveryPointLifecycleOutput";
export * from "../types/UpdateRecoveryPointLifecycleExceptionsUnion";

export class UpdateRecoveryPointLifecycleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRecoveryPointLifecycleInput,
      OutputTypesUnion,
      UpdateRecoveryPointLifecycleOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateRecoveryPointLifecycle;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRecoveryPointLifecycleInput,
    UpdateRecoveryPointLifecycleOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateRecoveryPointLifecycleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRecoveryPointLifecycleInput,
    UpdateRecoveryPointLifecycleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateRecoveryPointLifecycleInput,
        UpdateRecoveryPointLifecycleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
