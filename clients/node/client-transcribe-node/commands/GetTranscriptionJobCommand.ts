import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTranscriptionJob } from "../model/operations/GetTranscriptionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTranscriptionJobInput } from "../types/GetTranscriptionJobInput";
import { GetTranscriptionJobOutput } from "../types/GetTranscriptionJobOutput";
import { TranscribeResolvedConfiguration } from "../TranscribeConfiguration";
export * from "../types/GetTranscriptionJobInput";
export * from "../types/GetTranscriptionJobOutput";
export * from "../types/GetTranscriptionJobExceptionsUnion";

export class GetTranscriptionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTranscriptionJobInput,
      OutputTypesUnion,
      GetTranscriptionJobOutput,
      TranscribeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTranscriptionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTranscriptionJobInput,
    GetTranscriptionJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTranscriptionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TranscribeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetTranscriptionJobInput,
    GetTranscriptionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTranscriptionJobInput, GetTranscriptionJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
