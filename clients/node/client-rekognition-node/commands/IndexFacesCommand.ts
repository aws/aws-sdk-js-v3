import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { IndexFaces } from "../model/IndexFaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { IndexFacesInput } from "../types/IndexFacesInput";
import { IndexFacesOutput } from "../types/IndexFacesOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/IndexFacesInput";
export * from "../types/IndexFacesOutput";
export * from "../types/IndexFacesExceptionsUnion";

export class IndexFacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      IndexFacesInput,
      OutputTypesUnion,
      IndexFacesOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = IndexFaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    IndexFacesInput,
    IndexFacesOutput,
    _stream.Readable
  >();

  constructor(readonly input: IndexFacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<IndexFacesInput, IndexFacesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<IndexFacesInput, IndexFacesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
