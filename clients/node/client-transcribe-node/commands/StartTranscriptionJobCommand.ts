import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartTranscriptionJob } from "../model/operations/StartTranscriptionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartTranscriptionJobInput } from "../types/StartTranscriptionJobInput";
import { StartTranscriptionJobOutput } from "../types/StartTranscriptionJobOutput";
import { TranscribeResolvedConfiguration } from "../TranscribeConfiguration";
export * from "../types/StartTranscriptionJobInput";
export * from "../types/StartTranscriptionJobOutput";
export * from "../types/StartTranscriptionJobExceptionsUnion";

export class StartTranscriptionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartTranscriptionJobInput,
      OutputTypesUnion,
      StartTranscriptionJobOutput,
      TranscribeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartTranscriptionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartTranscriptionJobInput,
    StartTranscriptionJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartTranscriptionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TranscribeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartTranscriptionJobInput,
    StartTranscriptionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartTranscriptionJobInput, StartTranscriptionJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
