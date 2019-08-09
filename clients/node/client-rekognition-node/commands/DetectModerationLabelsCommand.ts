import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetectModerationLabels } from "../model/DetectModerationLabels";
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
      _stream.Readable
    > {
  readonly model = DetectModerationLabels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectModerationLabelsInput,
    DetectModerationLabelsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetectModerationLabelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
