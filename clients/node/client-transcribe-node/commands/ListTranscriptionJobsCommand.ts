import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTranscriptionJobs } from "../model/ListTranscriptionJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTranscriptionJobsInput } from "../types/ListTranscriptionJobsInput";
import { ListTranscriptionJobsOutput } from "../types/ListTranscriptionJobsOutput";
import { TranscribeResolvedConfiguration } from "../TranscribeConfiguration";
export * from "../types/ListTranscriptionJobsInput";
export * from "../types/ListTranscriptionJobsOutput";
export * from "../types/ListTranscriptionJobsExceptionsUnion";

export class ListTranscriptionJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTranscriptionJobsInput,
      OutputTypesUnion,
      ListTranscriptionJobsOutput,
      TranscribeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTranscriptionJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTranscriptionJobsInput,
    ListTranscriptionJobsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTranscriptionJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TranscribeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTranscriptionJobsInput,
    ListTranscriptionJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTranscriptionJobsInput, ListTranscriptionJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
