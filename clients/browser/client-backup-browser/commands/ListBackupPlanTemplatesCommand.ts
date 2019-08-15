import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListBackupPlanTemplates } from "../model/operations/ListBackupPlanTemplates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBackupPlanTemplatesInput } from "../types/ListBackupPlanTemplatesInput";
import { ListBackupPlanTemplatesOutput } from "../types/ListBackupPlanTemplatesOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/ListBackupPlanTemplatesInput";
export * from "../types/ListBackupPlanTemplatesOutput";
export * from "../types/ListBackupPlanTemplatesExceptionsUnion";

export class ListBackupPlanTemplatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBackupPlanTemplatesInput,
      OutputTypesUnion,
      ListBackupPlanTemplatesOutput,
      BackupResolvedConfiguration,
      Blob
    > {
  readonly model = ListBackupPlanTemplates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBackupPlanTemplatesInput,
    ListBackupPlanTemplatesOutput,
    Blob
  >();

  constructor(readonly input: ListBackupPlanTemplatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListBackupPlanTemplatesInput,
    ListBackupPlanTemplatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBackupPlanTemplatesInput, ListBackupPlanTemplatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
