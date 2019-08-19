import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ReplaceTransitGatewayRoute } from "../model/operations/ReplaceTransitGatewayRoute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReplaceTransitGatewayRouteInput } from "../types/ReplaceTransitGatewayRouteInput";
import { ReplaceTransitGatewayRouteOutput } from "../types/ReplaceTransitGatewayRouteOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ReplaceTransitGatewayRouteInput";
export * from "../types/ReplaceTransitGatewayRouteOutput";
export * from "../types/ReplaceTransitGatewayRouteExceptionsUnion";

export class ReplaceTransitGatewayRouteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReplaceTransitGatewayRouteInput,
      OutputTypesUnion,
      ReplaceTransitGatewayRouteOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ReplaceTransitGatewayRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReplaceTransitGatewayRouteInput,
    ReplaceTransitGatewayRouteOutput,
    Blob
  >();

  constructor(readonly input: ReplaceTransitGatewayRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ReplaceTransitGatewayRouteInput,
    ReplaceTransitGatewayRouteOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ReplaceTransitGatewayRouteInput,
        ReplaceTransitGatewayRouteOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
