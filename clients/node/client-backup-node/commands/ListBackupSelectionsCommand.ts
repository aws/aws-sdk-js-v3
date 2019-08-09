import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListBackupSelections } from "../model/ListBackupSelections";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBackupSelectionsInput } from "../types/ListBackupSelectionsInput";
import { ListBackupSelectionsOutput } from "../types/ListBackupSelectionsOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/ListBackupSelectionsInput";
export * from "../types/ListBackupSelectionsOutput";
export * from "../types/ListBackupSelectionsExceptionsUnion";

export class ListBackupSelectionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBackupSelectionsInput,
      OutputTypesUnion,
      ListBackupSelectionsOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListBackupSelections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBackupSelectionsInput,
    ListBackupSelectionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListBackupSelectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListBackupSelectionsInput,
    ListBackupSelectionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBackupSelectionsInput, ListBackupSelectionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
