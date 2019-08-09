import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchFacesByImage } from "../model/SearchFacesByImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchFacesByImageInput } from "../types/SearchFacesByImageInput";
import { SearchFacesByImageOutput } from "../types/SearchFacesByImageOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/SearchFacesByImageInput";
export * from "../types/SearchFacesByImageOutput";
export * from "../types/SearchFacesByImageExceptionsUnion";

export class SearchFacesByImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchFacesByImageInput,
      OutputTypesUnion,
      SearchFacesByImageOutput,
      RekognitionResolvedConfiguration,
      Blob
    > {
  readonly model = SearchFacesByImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchFacesByImageInput,
    SearchFacesByImageOutput,
    Blob
  >();

  constructor(readonly input: SearchFacesByImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SearchFacesByImageInput,
    SearchFacesByImageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchFacesByImageInput, SearchFacesByImageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
