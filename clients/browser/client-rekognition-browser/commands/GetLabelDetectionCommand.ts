import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetLabelDetection } from "../model/operations/GetLabelDetection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLabelDetectionInput } from "../types/GetLabelDetectionInput";
import { GetLabelDetectionOutput } from "../types/GetLabelDetectionOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/GetLabelDetectionInput";
export * from "../types/GetLabelDetectionOutput";
export * from "../types/GetLabelDetectionExceptionsUnion";

export class GetLabelDetectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLabelDetectionInput,
      OutputTypesUnion,
      GetLabelDetectionOutput,
      RekognitionResolvedConfiguration,
      Blob
    > {
  readonly model = GetLabelDetection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLabelDetectionInput,
    GetLabelDetectionOutput,
    Blob
  >();

  constructor(readonly input: GetLabelDetectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<GetLabelDetectionInput, GetLabelDetectionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLabelDetectionInput, GetLabelDetectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
