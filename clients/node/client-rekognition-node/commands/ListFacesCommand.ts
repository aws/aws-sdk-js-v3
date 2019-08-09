import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListFaces } from "../model/ListFaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFacesInput } from "../types/ListFacesInput";
import { ListFacesOutput } from "../types/ListFacesOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/ListFacesInput";
export * from "../types/ListFacesOutput";
export * from "../types/ListFacesExceptionsUnion";

export class ListFacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFacesInput,
      OutputTypesUnion,
      ListFacesOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListFaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFacesInput,
    ListFacesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListFacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<ListFacesInput, ListFacesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListFacesInput, ListFacesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
