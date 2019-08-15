import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopStreamProcessor } from "../model/operations/StopStreamProcessor";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopStreamProcessorInput } from "../types/StopStreamProcessorInput";
import { StopStreamProcessorOutput } from "../types/StopStreamProcessorOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/StopStreamProcessorInput";
export * from "../types/StopStreamProcessorOutput";
export * from "../types/StopStreamProcessorExceptionsUnion";

export class StopStreamProcessorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopStreamProcessorInput,
      OutputTypesUnion,
      StopStreamProcessorOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopStreamProcessor;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopStreamProcessorInput,
    StopStreamProcessorOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopStreamProcessorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopStreamProcessorInput,
    StopStreamProcessorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopStreamProcessorInput, StopStreamProcessorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
