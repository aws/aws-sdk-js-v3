import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteFaces } from "../model/DeleteFaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFacesInput } from "../types/DeleteFacesInput";
import { DeleteFacesOutput } from "../types/DeleteFacesOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/DeleteFacesInput";
export * from "../types/DeleteFacesOutput";
export * from "../types/DeleteFacesExceptionsUnion";

export class DeleteFacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFacesInput,
      OutputTypesUnion,
      DeleteFacesOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteFaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFacesInput,
    DeleteFacesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteFacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteFacesInput, DeleteFacesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFacesInput, DeleteFacesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
