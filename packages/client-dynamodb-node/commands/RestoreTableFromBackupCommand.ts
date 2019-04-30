import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RestoreTableFromBackup } from "../model/RestoreTableFromBackup";
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
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreTableFromBackupInput,
    RestoreTableFromBackupOutput,
    _stream.Readable
  >();

  constructor(readonly input: RestoreTableFromBackupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
      model: RestoreTableFromBackup
    };

    return stack.resolve(
      handler<RestoreTableFromBackupInput, RestoreTableFromBackupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
