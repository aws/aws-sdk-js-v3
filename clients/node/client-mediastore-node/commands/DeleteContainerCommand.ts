import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteContainer } from "../model/operations/DeleteContainer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteContainerInput } from "../types/DeleteContainerInput";
import { DeleteContainerOutput } from "../types/DeleteContainerOutput";
import { MediaStoreResolvedConfiguration } from "../MediaStoreConfiguration";
export * from "../types/DeleteContainerInput";
export * from "../types/DeleteContainerOutput";
export * from "../types/DeleteContainerExceptionsUnion";

export class DeleteContainerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteContainerInput,
      OutputTypesUnion,
      DeleteContainerOutput,
      MediaStoreResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteContainer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteContainerInput,
    DeleteContainerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteContainerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaStoreResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteContainerInput, DeleteContainerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteContainerInput, DeleteContainerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
