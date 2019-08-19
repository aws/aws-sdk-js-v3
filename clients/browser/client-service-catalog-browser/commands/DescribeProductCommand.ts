import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeProduct } from "../model/operations/DescribeProduct";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProductInput } from "../types/DescribeProductInput";
import { DescribeProductOutput } from "../types/DescribeProductOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeProductInput";
export * from "../types/DescribeProductOutput";
export * from "../types/DescribeProductExceptionsUnion";

export class DescribeProductCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProductInput,
      OutputTypesUnion,
      DescribeProductOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeProduct;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProductInput,
    DescribeProductOutput,
    Blob
  >();

  constructor(readonly input: DescribeProductInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeProductInput, DescribeProductOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeProductInput, DescribeProductOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
