import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteProduct } from "../model/DeleteProduct";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteProductInput } from "../types/DeleteProductInput";
import { DeleteProductOutput } from "../types/DeleteProductOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DeleteProductInput";
export * from "../types/DeleteProductOutput";
export * from "../types/DeleteProductExceptionsUnion";

export class DeleteProductCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteProductInput,
      OutputTypesUnion,
      DeleteProductOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteProduct;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteProductInput,
    DeleteProductOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteProductInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteProductInput, DeleteProductOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteProductInput, DeleteProductOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
