import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteCollection } from "../model/operations/DeleteCollection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCollectionInput } from "../types/DeleteCollectionInput";
import { DeleteCollectionOutput } from "../types/DeleteCollectionOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/DeleteCollectionInput";
export * from "../types/DeleteCollectionOutput";
export * from "../types/DeleteCollectionExceptionsUnion";

export class DeleteCollectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCollectionInput,
      OutputTypesUnion,
      DeleteCollectionOutput,
      RekognitionResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteCollection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCollectionInput,
    DeleteCollectionOutput,
    Blob
  >();

  constructor(readonly input: DeleteCollectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteCollectionInput, DeleteCollectionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCollectionInput, DeleteCollectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
