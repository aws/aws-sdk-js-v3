import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartLabelDetection } from "../model/StartLabelDetection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartLabelDetectionInput } from "../types/StartLabelDetectionInput";
import { StartLabelDetectionOutput } from "../types/StartLabelDetectionOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/StartLabelDetectionInput";
export * from "../types/StartLabelDetectionOutput";
export * from "../types/StartLabelDetectionExceptionsUnion";

export class StartLabelDetectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartLabelDetectionInput,
      OutputTypesUnion,
      StartLabelDetectionOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartLabelDetection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartLabelDetectionInput,
    StartLabelDetectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartLabelDetectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartLabelDetectionInput,
    StartLabelDetectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartLabelDetectionInput, StartLabelDetectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
