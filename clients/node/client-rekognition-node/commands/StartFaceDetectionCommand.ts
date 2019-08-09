import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartFaceDetection } from "../model/StartFaceDetection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartFaceDetectionInput } from "../types/StartFaceDetectionInput";
import { StartFaceDetectionOutput } from "../types/StartFaceDetectionOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/StartFaceDetectionInput";
export * from "../types/StartFaceDetectionOutput";
export * from "../types/StartFaceDetectionExceptionsUnion";

export class StartFaceDetectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartFaceDetectionInput,
      OutputTypesUnion,
      StartFaceDetectionOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartFaceDetection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartFaceDetectionInput,
    StartFaceDetectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartFaceDetectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartFaceDetectionInput,
    StartFaceDetectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartFaceDetectionInput, StartFaceDetectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
