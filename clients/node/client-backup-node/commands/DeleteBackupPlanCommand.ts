import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBackupPlan } from "../model/operations/DeleteBackupPlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBackupPlanInput } from "../types/DeleteBackupPlanInput";
import { DeleteBackupPlanOutput } from "../types/DeleteBackupPlanOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/DeleteBackupPlanInput";
export * from "../types/DeleteBackupPlanOutput";
export * from "../types/DeleteBackupPlanExceptionsUnion";

export class DeleteBackupPlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBackupPlanInput,
      OutputTypesUnion,
      DeleteBackupPlanOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBackupPlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBackupPlanInput,
    DeleteBackupPlanOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBackupPlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteBackupPlanInput, DeleteBackupPlanOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBackupPlanInput, DeleteBackupPlanOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
