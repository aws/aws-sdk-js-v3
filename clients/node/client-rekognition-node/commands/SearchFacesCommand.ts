import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SearchFaces } from "../model/SearchFaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchFacesInput } from "../types/SearchFacesInput";
import { SearchFacesOutput } from "../types/SearchFacesOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/SearchFacesInput";
export * from "../types/SearchFacesOutput";
export * from "../types/SearchFacesExceptionsUnion";

export class SearchFacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchFacesInput,
      OutputTypesUnion,
      SearchFacesOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SearchFaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchFacesInput,
    SearchFacesOutput,
    _stream.Readable
  >();

  constructor(readonly input: SearchFacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<SearchFacesInput, SearchFacesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchFacesInput, SearchFacesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
