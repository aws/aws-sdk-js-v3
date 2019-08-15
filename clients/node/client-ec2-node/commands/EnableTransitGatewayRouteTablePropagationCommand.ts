import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableTransitGatewayRouteTablePropagation } from "../model/operations/EnableTransitGatewayRouteTablePropagation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableTransitGatewayRouteTablePropagationInput } from "../types/EnableTransitGatewayRouteTablePropagationInput";
import { EnableTransitGatewayRouteTablePropagationOutput } from "../types/EnableTransitGatewayRouteTablePropagationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/EnableTransitGatewayRouteTablePropagationInput";
export * from "../types/EnableTransitGatewayRouteTablePropagationOutput";
export * from "../types/EnableTransitGatewayRouteTablePropagationExceptionsUnion";

export class EnableTransitGatewayRouteTablePropagationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableTransitGatewayRouteTablePropagationInput,
      OutputTypesUnion,
      EnableTransitGatewayRouteTablePropagationOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableTransitGatewayRouteTablePropagation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableTransitGatewayRouteTablePropagationInput,
    EnableTransitGatewayRouteTablePropagationOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableTransitGatewayRouteTablePropagationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableTransitGatewayRouteTablePropagationInput,
    EnableTransitGatewayRouteTablePropagationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        EnableTransitGatewayRouteTablePropagationInput,
        EnableTransitGatewayRouteTablePropagationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
