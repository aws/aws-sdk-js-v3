import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetectLabels } from "../model/operations/DetectLabels";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetectLabelsInput } from "../types/DetectLabelsInput";
import { DetectLabelsOutput } from "../types/DetectLabelsOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/DetectLabelsInput";
export * from "../types/DetectLabelsOutput";
export * from "../types/DetectLabelsExceptionsUnion";

export class DetectLabelsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetectLabelsInput,
      OutputTypesUnion,
      DetectLabelsOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetectLabels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectLabelsInput,
    DetectLabelsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetectLabelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<DetectLabelsInput, DetectLabelsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetectLabelsInput, DetectLabelsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
