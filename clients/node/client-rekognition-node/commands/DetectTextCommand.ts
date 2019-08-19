import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetectText } from "../model/operations/DetectText";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetectTextInput } from "../types/DetectTextInput";
import { DetectTextOutput } from "../types/DetectTextOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/DetectTextInput";
export * from "../types/DetectTextOutput";
export * from "../types/DetectTextExceptionsUnion";

export class DetectTextCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetectTextInput,
      OutputTypesUnion,
      DetectTextOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetectText;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectTextInput,
    DetectTextOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetectTextInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<DetectTextInput, DetectTextOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetectTextInput, DetectTextOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
