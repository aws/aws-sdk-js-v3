import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateTransitGatewayRoute } from "../model/CreateTransitGatewayRoute";
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
      _stream.Readable
    > {
  readonly model = CreateTransitGatewayRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTransitGatewayRouteInput,
    CreateTransitGatewayRouteOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTransitGatewayRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
