import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTransitGatewayRoute } from "../model/operations/CreateTransitGatewayRoute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTransitGatewayRouteInput } from "../types/CreateTransitGatewayRouteInput";
import { CreateTransitGatewayRouteOutput } from "../types/CreateTransitGatewayRouteOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateTransitGatewayRouteInput";
export * from "../types/CreateTransitGatewayRouteOutput";
export * from "../types/CreateTransitGatewayRouteExceptionsUnion";

export class CreateTransitGatewayRouteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTransitGatewayRouteInput,
      OutputTypesUnion,
      CreateTransitGatewayRouteOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateTransitGatewayRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTransitGatewayRouteInput,
    CreateTransitGatewayRouteOutput,
    Blob
  >();

  constructor(readonly input: CreateTransitGatewayRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateTransitGatewayRouteInput,
    CreateTransitGatewayRouteOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTransitGatewayRouteInput, CreateTransitGatewayRouteOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
