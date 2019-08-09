import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateBackupPlan } from "../model/UpdateBackupPlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateBackupPlanInput } from "../types/UpdateBackupPlanInput";
import { UpdateBackupPlanOutput } from "../types/UpdateBackupPlanOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/UpdateBackupPlanInput";
export * from "../types/UpdateBackupPlanOutput";
export * from "../types/UpdateBackupPlanExceptionsUnion";

export class UpdateBackupPlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateBackupPlanInput,
      OutputTypesUnion,
      UpdateBackupPlanOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateBackupPlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateBackupPlanInput,
    UpdateBackupPlanOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateBackupPlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateBackupPlanInput, UpdateBackupPlanOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateBackupPlanInput, UpdateBackupPlanOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
