import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CompareFaces } from "../model/CompareFaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CompareFacesInput } from "../types/CompareFacesInput";
import { CompareFacesOutput } from "../types/CompareFacesOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/CompareFacesInput";
export * from "../types/CompareFacesOutput";
export * from "../types/CompareFacesExceptionsUnion";

export class CompareFacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CompareFacesInput,
      OutputTypesUnion,
      CompareFacesOutput,
      RekognitionResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CompareFaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CompareFacesInput,
    CompareFacesOutput,
    Uint8Array
  >();

  constructor(readonly input: CompareFacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<CompareFacesInput, CompareFacesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CompareFacesInput, CompareFacesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
