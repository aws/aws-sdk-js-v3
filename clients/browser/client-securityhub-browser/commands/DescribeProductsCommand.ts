import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeProducts } from "../model/DescribeProducts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProductsInput } from "../types/DescribeProductsInput";
import { DescribeProductsOutput } from "../types/DescribeProductsOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/DescribeProductsInput";
export * from "../types/DescribeProductsOutput";
export * from "../types/DescribeProductsExceptionsUnion";

export class DescribeProductsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProductsInput,
      OutputTypesUnion,
      DescribeProductsOutput,
      SecurityHubResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeProducts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProductsInput,
    DescribeProductsOutput,
    Blob
  >();

  constructor(readonly input: DescribeProductsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeProductsInput, DescribeProductsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeProductsInput, DescribeProductsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
