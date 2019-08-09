import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDirectConnectGatewayAssociations } from "../model/DescribeDirectConnectGatewayAssociations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDirectConnectGatewayAssociationsInput } from "../types/DescribeDirectConnectGatewayAssociationsInput";
import { DescribeDirectConnectGatewayAssociationsOutput } from "../types/DescribeDirectConnectGatewayAssociationsOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DescribeDirectConnectGatewayAssociationsInput";
export * from "../types/DescribeDirectConnectGatewayAssociationsOutput";
export * from "../types/DescribeDirectConnectGatewayAssociationsExceptionsUnion";

export class DescribeDirectConnectGatewayAssociationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDirectConnectGatewayAssociationsInput,
      OutputTypesUnion,
      DescribeDirectConnectGatewayAssociationsOutput,
      DirectConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeDirectConnectGatewayAssociations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDirectConnectGatewayAssociationsInput,
    DescribeDirectConnectGatewayAssociationsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeDirectConnectGatewayAssociationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDirectConnectGatewayAssociationsInput,
    DescribeDirectConnectGatewayAssociationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDirectConnectGatewayAssociationsInput,
        DescribeDirectConnectGatewayAssociationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
