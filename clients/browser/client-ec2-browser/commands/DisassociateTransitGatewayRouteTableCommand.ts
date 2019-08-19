import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateTransitGatewayRouteTable } from "../model/operations/DisassociateTransitGatewayRouteTable";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateTransitGatewayRouteTableInput } from "../types/DisassociateTransitGatewayRouteTableInput";
import { DisassociateTransitGatewayRouteTableOutput } from "../types/DisassociateTransitGatewayRouteTableOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DisassociateTransitGatewayRouteTableInput";
export * from "../types/DisassociateTransitGatewayRouteTableOutput";
export * from "../types/DisassociateTransitGatewayRouteTableExceptionsUnion";

export class DisassociateTransitGatewayRouteTableCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateTransitGatewayRouteTableInput,
      OutputTypesUnion,
      DisassociateTransitGatewayRouteTableOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateTransitGatewayRouteTable;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateTransitGatewayRouteTableInput,
    DisassociateTransitGatewayRouteTableOutput,
    Blob
  >();

  constructor(readonly input: DisassociateTransitGatewayRouteTableInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateTransitGatewayRouteTableInput,
    DisassociateTransitGatewayRouteTableOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateTransitGatewayRouteTableInput,
        DisassociateTransitGatewayRouteTableOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
