import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDatasetImportJobs } from "../model/operations/ListDatasetImportJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDatasetImportJobsInput } from "../types/ListDatasetImportJobsInput";
import { ListDatasetImportJobsOutput } from "../types/ListDatasetImportJobsOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/ListDatasetImportJobsInput";
export * from "../types/ListDatasetImportJobsOutput";
export * from "../types/ListDatasetImportJobsExceptionsUnion";

export class ListDatasetImportJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDatasetImportJobsInput,
      OutputTypesUnion,
      ListDatasetImportJobsOutput,
      PersonalizeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDatasetImportJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDatasetImportJobsInput,
    ListDatasetImportJobsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDatasetImportJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDatasetImportJobsInput,
    ListDatasetImportJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDatasetImportJobsInput, ListDatasetImportJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
