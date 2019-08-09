import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeServiceAction } from "../model/DescribeServiceAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeServiceActionInput } from "../types/DescribeServiceActionInput";
import { DescribeServiceActionOutput } from "../types/DescribeServiceActionOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeServiceActionInput";
export * from "../types/DescribeServiceActionOutput";
export * from "../types/DescribeServiceActionExceptionsUnion";

export class DescribeServiceActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeServiceActionInput,
      OutputTypesUnion,
      DescribeServiceActionOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeServiceAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeServiceActionInput,
    DescribeServiceActionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeServiceActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeServiceActionInput,
    DescribeServiceActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeServiceActionInput, DescribeServiceActionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
