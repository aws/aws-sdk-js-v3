import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CopyProduct } from "../model/operations/CopyProduct";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyProductInput } from "../types/CopyProductInput";
import { CopyProductOutput } from "../types/CopyProductOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/CopyProductInput";
export * from "../types/CopyProductOutput";
export * from "../types/CopyProductExceptionsUnion";

export class CopyProductCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopyProductInput,
      OutputTypesUnion,
      CopyProductOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = CopyProduct;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyProductInput,
    CopyProductOutput,
    Blob
  >();

  constructor(readonly input: CopyProductInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<CopyProductInput, CopyProductOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CopyProductInput, CopyProductOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
