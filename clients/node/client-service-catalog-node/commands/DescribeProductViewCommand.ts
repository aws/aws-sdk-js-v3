import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeProductView } from "../model/operations/DescribeProductView";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProductViewInput } from "../types/DescribeProductViewInput";
import { DescribeProductViewOutput } from "../types/DescribeProductViewOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeProductViewInput";
export * from "../types/DescribeProductViewOutput";
export * from "../types/DescribeProductViewExceptionsUnion";

export class DescribeProductViewCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProductViewInput,
      OutputTypesUnion,
      DescribeProductViewOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeProductView;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProductViewInput,
    DescribeProductViewOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeProductViewInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeProductViewInput,
    DescribeProductViewOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeProductViewInput, DescribeProductViewOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
