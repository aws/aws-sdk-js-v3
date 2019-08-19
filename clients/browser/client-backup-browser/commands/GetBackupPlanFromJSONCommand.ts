import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBackupPlanFromJSON } from "../model/operations/GetBackupPlanFromJSON";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBackupPlanFromJSONInput } from "../types/GetBackupPlanFromJSONInput";
import { GetBackupPlanFromJSONOutput } from "../types/GetBackupPlanFromJSONOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/GetBackupPlanFromJSONInput";
export * from "../types/GetBackupPlanFromJSONOutput";
export * from "../types/GetBackupPlanFromJSONExceptionsUnion";

export class GetBackupPlanFromJSONCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBackupPlanFromJSONInput,
      OutputTypesUnion,
      GetBackupPlanFromJSONOutput,
      BackupResolvedConfiguration,
      Blob
    > {
  readonly model = GetBackupPlanFromJSON;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBackupPlanFromJSONInput,
    GetBackupPlanFromJSONOutput,
    Blob
  >();

  constructor(readonly input: GetBackupPlanFromJSONInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBackupPlanFromJSONInput,
    GetBackupPlanFromJSONOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBackupPlanFromJSONInput, GetBackupPlanFromJSONOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
