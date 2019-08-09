import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListBackupPlans } from "../model/ListBackupPlans";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBackupPlansInput } from "../types/ListBackupPlansInput";
import { ListBackupPlansOutput } from "../types/ListBackupPlansOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/ListBackupPlansInput";
export * from "../types/ListBackupPlansOutput";
export * from "../types/ListBackupPlansExceptionsUnion";

export class ListBackupPlansCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBackupPlansInput,
      OutputTypesUnion,
      ListBackupPlansOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListBackupPlans;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBackupPlansInput,
    ListBackupPlansOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListBackupPlansInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<ListBackupPlansInput, ListBackupPlansOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBackupPlansInput, ListBackupPlansOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
