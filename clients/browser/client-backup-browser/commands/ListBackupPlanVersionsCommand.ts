import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListBackupPlanVersions } from "../model/ListBackupPlanVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBackupPlanVersionsInput } from "../types/ListBackupPlanVersionsInput";
import { ListBackupPlanVersionsOutput } from "../types/ListBackupPlanVersionsOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/ListBackupPlanVersionsInput";
export * from "../types/ListBackupPlanVersionsOutput";
export * from "../types/ListBackupPlanVersionsExceptionsUnion";

export class ListBackupPlanVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBackupPlanVersionsInput,
      OutputTypesUnion,
      ListBackupPlanVersionsOutput,
      BackupResolvedConfiguration,
      Blob
    > {
  readonly model = ListBackupPlanVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBackupPlanVersionsInput,
    ListBackupPlanVersionsOutput,
    Blob
  >();

  constructor(readonly input: ListBackupPlanVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListBackupPlanVersionsInput,
    ListBackupPlanVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBackupPlanVersionsInput, ListBackupPlanVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
