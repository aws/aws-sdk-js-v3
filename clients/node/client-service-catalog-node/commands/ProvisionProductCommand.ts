import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ProvisionProduct } from "../model/operations/ProvisionProduct";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ProvisionProductInput } from "../types/ProvisionProductInput";
import { ProvisionProductOutput } from "../types/ProvisionProductOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ProvisionProductInput";
export * from "../types/ProvisionProductOutput";
export * from "../types/ProvisionProductExceptionsUnion";

export class ProvisionProductCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ProvisionProductInput,
      OutputTypesUnion,
      ProvisionProductOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ProvisionProduct;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ProvisionProductInput,
    ProvisionProductOutput,
    _stream.Readable
  >();

  constructor(readonly input: ProvisionProductInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<ProvisionProductInput, ProvisionProductOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ProvisionProductInput, ProvisionProductOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
