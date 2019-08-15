import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetBackupPlan } from "../model/operations/GetBackupPlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBackupPlanInput } from "../types/GetBackupPlanInput";
import { GetBackupPlanOutput } from "../types/GetBackupPlanOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/GetBackupPlanInput";
export * from "../types/GetBackupPlanOutput";
export * from "../types/GetBackupPlanExceptionsUnion";

export class GetBackupPlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBackupPlanInput,
      OutputTypesUnion,
      GetBackupPlanOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetBackupPlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBackupPlanInput,
    GetBackupPlanOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetBackupPlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBackupPlanInput, GetBackupPlanOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBackupPlanInput, GetBackupPlanOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
