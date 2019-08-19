import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTransitGatewayRouteTablePropagations } from "../model/operations/GetTransitGatewayRouteTablePropagations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTransitGatewayRouteTablePropagationsInput } from "../types/GetTransitGatewayRouteTablePropagationsInput";
import { GetTransitGatewayRouteTablePropagationsOutput } from "../types/GetTransitGatewayRouteTablePropagationsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetTransitGatewayRouteTablePropagationsInput";
export * from "../types/GetTransitGatewayRouteTablePropagationsOutput";
export * from "../types/GetTransitGatewayRouteTablePropagationsExceptionsUnion";

export class GetTransitGatewayRouteTablePropagationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTransitGatewayRouteTablePropagationsInput,
      OutputTypesUnion,
      GetTransitGatewayRouteTablePropagationsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTransitGatewayRouteTablePropagations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTransitGatewayRouteTablePropagationsInput,
    GetTransitGatewayRouteTablePropagationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTransitGatewayRouteTablePropagationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetTransitGatewayRouteTablePropagationsInput,
    GetTransitGatewayRouteTablePropagationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetTransitGatewayRouteTablePropagationsInput,
        GetTransitGatewayRouteTablePropagationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
