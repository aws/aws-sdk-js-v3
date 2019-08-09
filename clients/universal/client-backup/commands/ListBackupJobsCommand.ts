import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListBackupJobs } from "../model/ListBackupJobs";
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
      Uint8Array
    > {
  readonly model = ListBackupJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBackupJobsInput,
    ListBackupJobsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListBackupJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
