import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateProduct } from "../model/UpdateProduct";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateProductInput } from "../types/UpdateProductInput";
import { UpdateProductOutput } from "../types/UpdateProductOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/UpdateProductInput";
export * from "../types/UpdateProductOutput";
export * from "../types/UpdateProductExceptionsUnion";

export class UpdateProductCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateProductInput,
      OutputTypesUnion,
      UpdateProductOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateProduct;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateProductInput,
    UpdateProductOutput,
    Blob
  >();

  constructor(readonly input: UpdateProductInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateProductInput, UpdateProductOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateProductInput, UpdateProductOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
