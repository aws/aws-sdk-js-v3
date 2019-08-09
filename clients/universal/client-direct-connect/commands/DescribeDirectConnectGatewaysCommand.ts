import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDirectConnectGateways } from "../model/DescribeDirectConnectGateways";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDirectConnectGatewaysInput } from "../types/DescribeDirectConnectGatewaysInput";
import { DescribeDirectConnectGatewaysOutput } from "../types/DescribeDirectConnectGatewaysOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DescribeDirectConnectGatewaysInput";
export * from "../types/DescribeDirectConnectGatewaysOutput";
export * from "../types/DescribeDirectConnectGatewaysExceptionsUnion";

export class DescribeDirectConnectGatewaysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDirectConnectGatewaysInput,
      OutputTypesUnion,
      DescribeDirectConnectGatewaysOutput,
      DirectConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeDirectConnectGateways;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDirectConnectGatewaysInput,
    DescribeDirectConnectGatewaysOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeDirectConnectGatewaysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDirectConnectGatewaysInput,
    DescribeDirectConnectGatewaysOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDirectConnectGatewaysInput,
        DescribeDirectConnectGatewaysOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
