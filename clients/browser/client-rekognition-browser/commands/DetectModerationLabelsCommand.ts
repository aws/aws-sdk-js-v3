import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetectModerationLabels } from "../model/operations/DetectModerationLabels";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetectModerationLabelsInput } from "../types/DetectModerationLabelsInput";
import { DetectModerationLabelsOutput } from "../types/DetectModerationLabelsOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/DetectModerationLabelsInput";
export * from "../types/DetectModerationLabelsOutput";
export * from "../types/DetectModerationLabelsExceptionsUnion";

export class DetectModerationLabelsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetectModerationLabelsInput,
      OutputTypesUnion,
      DetectModerationLabelsOutput,
      RekognitionResolvedConfiguration,
      Blob
    > {
  readonly model = DetectModerationLabels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectModerationLabelsInput,
    DetectModerationLabelsOutput,
    Blob
  >();

  constructor(readonly input: DetectModerationLabelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetectModerationLabelsInput,
    DetectModerationLabelsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetectModerationLabelsInput, DetectModerationLabelsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
