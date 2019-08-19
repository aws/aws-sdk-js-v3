import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateTransitGatewayRouteTable } from "../model/operations/AssociateTransitGatewayRouteTable";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateTransitGatewayRouteTableInput } from "../types/AssociateTransitGatewayRouteTableInput";
import { AssociateTransitGatewayRouteTableOutput } from "../types/AssociateTransitGatewayRouteTableOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AssociateTransitGatewayRouteTableInput";
export * from "../types/AssociateTransitGatewayRouteTableOutput";
export * from "../types/AssociateTransitGatewayRouteTableExceptionsUnion";

export class AssociateTransitGatewayRouteTableCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateTransitGatewayRouteTableInput,
      OutputTypesUnion,
      AssociateTransitGatewayRouteTableOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateTransitGatewayRouteTable;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateTransitGatewayRouteTableInput,
    AssociateTransitGatewayRouteTableOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateTransitGatewayRouteTableInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateTransitGatewayRouteTableInput,
    AssociateTransitGatewayRouteTableOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateTransitGatewayRouteTableInput,
        AssociateTransitGatewayRouteTableOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
