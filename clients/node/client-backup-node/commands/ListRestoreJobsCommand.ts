import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRestoreJobs } from "../model/ListRestoreJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRestoreJobsInput } from "../types/ListRestoreJobsInput";
import { ListRestoreJobsOutput } from "../types/ListRestoreJobsOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/ListRestoreJobsInput";
export * from "../types/ListRestoreJobsOutput";
export * from "../types/ListRestoreJobsExceptionsUnion";

export class ListRestoreJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRestoreJobsInput,
      OutputTypesUnion,
      ListRestoreJobsOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRestoreJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRestoreJobsInput,
    ListRestoreJobsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRestoreJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRestoreJobsInput, ListRestoreJobsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRestoreJobsInput, ListRestoreJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
