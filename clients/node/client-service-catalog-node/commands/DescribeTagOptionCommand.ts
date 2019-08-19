import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTagOption } from "../model/operations/DescribeTagOption";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTagOptionInput } from "../types/DescribeTagOptionInput";
import { DescribeTagOptionOutput } from "../types/DescribeTagOptionOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeTagOptionInput";
export * from "../types/DescribeTagOptionOutput";
export * from "../types/DescribeTagOptionExceptionsUnion";

export class DescribeTagOptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTagOptionInput,
      OutputTypesUnion,
      DescribeTagOptionOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeTagOption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTagOptionInput,
    DescribeTagOptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeTagOptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeTagOptionInput, DescribeTagOptionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTagOptionInput, DescribeTagOptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
