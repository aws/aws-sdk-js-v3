import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Uint8Array
    > {
  readonly model = DescribeServiceAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeServiceActionInput,
    DescribeServiceActionOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeServiceActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
