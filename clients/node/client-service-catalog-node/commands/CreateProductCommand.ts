import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateProduct } from "../model/operations/CreateProduct";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateProductInput } from "../types/CreateProductInput";
import { CreateProductOutput } from "../types/CreateProductOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/CreateProductInput";
export * from "../types/CreateProductOutput";
export * from "../types/CreateProductExceptionsUnion";

export class CreateProductCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateProductInput,
      OutputTypesUnion,
      CreateProductOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateProduct;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateProductInput,
    CreateProductOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateProductInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateProductInput, CreateProductOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateProductInput, CreateProductOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
