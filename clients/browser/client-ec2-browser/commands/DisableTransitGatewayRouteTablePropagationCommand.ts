import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisableTransitGatewayRouteTablePropagation } from "../model/operations/DisableTransitGatewayRouteTablePropagation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableTransitGatewayRouteTablePropagationInput } from "../types/DisableTransitGatewayRouteTablePropagationInput";
import { DisableTransitGatewayRouteTablePropagationOutput } from "../types/DisableTransitGatewayRouteTablePropagationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DisableTransitGatewayRouteTablePropagationInput";
export * from "../types/DisableTransitGatewayRouteTablePropagationOutput";
export * from "../types/DisableTransitGatewayRouteTablePropagationExceptionsUnion";

export class DisableTransitGatewayRouteTablePropagationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableTransitGatewayRouteTablePropagationInput,
      OutputTypesUnion,
      DisableTransitGatewayRouteTablePropagationOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DisableTransitGatewayRouteTablePropagation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableTransitGatewayRouteTablePropagationInput,
    DisableTransitGatewayRouteTablePropagationOutput,
    Blob
  >();

  constructor(
    readonly input: DisableTransitGatewayRouteTablePropagationInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableTransitGatewayRouteTablePropagationInput,
    DisableTransitGatewayRouteTablePropagationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisableTransitGatewayRouteTablePropagationInput,
        DisableTransitGatewayRouteTablePropagationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
