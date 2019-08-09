import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetFaceDetection } from "../model/GetFaceDetection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFaceDetectionInput } from "../types/GetFaceDetectionInput";
import { GetFaceDetectionOutput } from "../types/GetFaceDetectionOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/GetFaceDetectionInput";
export * from "../types/GetFaceDetectionOutput";
export * from "../types/GetFaceDetectionExceptionsUnion";

export class GetFaceDetectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFaceDetectionInput,
      OutputTypesUnion,
      GetFaceDetectionOutput,
      RekognitionResolvedConfiguration,
      Blob
    > {
  readonly model = GetFaceDetection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFaceDetectionInput,
    GetFaceDetectionOutput,
    Blob
  >();

  constructor(readonly input: GetFaceDetectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<GetFaceDetectionInput, GetFaceDetectionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetFaceDetectionInput, GetFaceDetectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
