import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RestoreTableFromBackup } from "../model/operations/RestoreTableFromBackup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreTableFromBackupInput } from "../types/RestoreTableFromBackupInput";
import { RestoreTableFromBackupOutput } from "../types/RestoreTableFromBackupOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/RestoreTableFromBackupInput";
export * from "../types/RestoreTableFromBackupOutput";
export * from "../types/RestoreTableFromBackupExceptionsUnion";

export class RestoreTableFromBackupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreTableFromBackupInput,
      OutputTypesUnion,
      RestoreTableFromBackupOutput,
      DynamoDBResolvedConfiguration,
      Blob
    > {
  readonly model = RestoreTableFromBackup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreTableFromBackupInput,
    RestoreTableFromBackupOutput,
    Blob
  >();

  constructor(readonly input: RestoreTableFromBackupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestoreTableFromBackupInput,
    RestoreTableFromBackupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RestoreTableFromBackupInput, RestoreTableFromBackupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
