import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBackupPlanFromTemplate } from "../model/GetBackupPlanFromTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBackupPlanFromTemplateInput } from "../types/GetBackupPlanFromTemplateInput";
import { GetBackupPlanFromTemplateOutput } from "../types/GetBackupPlanFromTemplateOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/GetBackupPlanFromTemplateInput";
export * from "../types/GetBackupPlanFromTemplateOutput";
export * from "../types/GetBackupPlanFromTemplateExceptionsUnion";

export class GetBackupPlanFromTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBackupPlanFromTemplateInput,
      OutputTypesUnion,
      GetBackupPlanFromTemplateOutput,
      BackupResolvedConfiguration,
      Blob
    > {
  readonly model = GetBackupPlanFromTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBackupPlanFromTemplateInput,
    GetBackupPlanFromTemplateOutput,
    Blob
  >();

  constructor(readonly input: GetBackupPlanFromTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBackupPlanFromTemplateInput,
    GetBackupPlanFromTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBackupPlanFromTemplateInput, GetBackupPlanFromTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
