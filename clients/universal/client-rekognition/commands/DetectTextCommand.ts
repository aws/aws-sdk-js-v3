import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetectText } from "../model/DetectText";
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
      Uint8Array
    > {
  readonly model = DetectText;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectTextInput,
    DetectTextOutput,
    Uint8Array
  >();

  constructor(readonly input: DetectTextInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
