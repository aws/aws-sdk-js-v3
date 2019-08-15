import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListBackupJobs } from "../model/operations/ListBackupJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBackupJobsInput } from "../types/ListBackupJobsInput";
import { ListBackupJobsOutput } from "../types/ListBackupJobsOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/ListBackupJobsInput";
export * from "../types/ListBackupJobsOutput";
export * from "../types/ListBackupJobsExceptionsUnion";

export class ListBackupJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBackupJobsInput,
      OutputTypesUnion,
      ListBackupJobsOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListBackupJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBackupJobsInput,
    ListBackupJobsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListBackupJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<ListBackupJobsInput, ListBackupJobsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBackupJobsInput, ListBackupJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
