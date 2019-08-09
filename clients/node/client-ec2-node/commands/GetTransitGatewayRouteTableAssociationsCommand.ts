import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTransitGatewayRouteTableAssociations } from "../model/GetTransitGatewayRouteTableAssociations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTransitGatewayRouteTableAssociationsInput } from "../types/GetTransitGatewayRouteTableAssociationsInput";
import { GetTransitGatewayRouteTableAssociationsOutput } from "../types/GetTransitGatewayRouteTableAssociationsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetTransitGatewayRouteTableAssociationsInput";
export * from "../types/GetTransitGatewayRouteTableAssociationsOutput";
export * from "../types/GetTransitGatewayRouteTableAssociationsExceptionsUnion";

export class GetTransitGatewayRouteTableAssociationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTransitGatewayRouteTableAssociationsInput,
      OutputTypesUnion,
      GetTransitGatewayRouteTableAssociationsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTransitGatewayRouteTableAssociations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTransitGatewayRouteTableAssociationsInput,
    GetTransitGatewayRouteTableAssociationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTransitGatewayRouteTableAssociationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetTransitGatewayRouteTableAssociationsInput,
    GetTransitGatewayRouteTableAssociationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetTransitGatewayRouteTableAssociationsInput,
        GetTransitGatewayRouteTableAssociationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
