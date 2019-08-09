import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetectFaces } from "../model/DetectFaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetectFacesInput } from "../types/DetectFacesInput";
import { DetectFacesOutput } from "../types/DetectFacesOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/DetectFacesInput";
export * from "../types/DetectFacesOutput";
export * from "../types/DetectFacesExceptionsUnion";

export class DetectFacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetectFacesInput,
      OutputTypesUnion,
      DetectFacesOutput,
      RekognitionResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DetectFaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectFacesInput,
    DetectFacesOutput,
    Uint8Array
  >();

  constructor(readonly input: DetectFacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<DetectFacesInput, DetectFacesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetectFacesInput, DetectFacesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
