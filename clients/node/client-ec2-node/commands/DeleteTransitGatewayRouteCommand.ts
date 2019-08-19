import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteTransitGatewayRoute } from "../model/operations/DeleteTransitGatewayRoute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTransitGatewayRouteInput } from "../types/DeleteTransitGatewayRouteInput";
import { DeleteTransitGatewayRouteOutput } from "../types/DeleteTransitGatewayRouteOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteTransitGatewayRouteInput";
export * from "../types/DeleteTransitGatewayRouteOutput";
export * from "../types/DeleteTransitGatewayRouteExceptionsUnion";

export class DeleteTransitGatewayRouteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTransitGatewayRouteInput,
      OutputTypesUnion,
      DeleteTransitGatewayRouteOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteTransitGatewayRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTransitGatewayRouteInput,
    DeleteTransitGatewayRouteOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteTransitGatewayRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteTransitGatewayRouteInput,
    DeleteTransitGatewayRouteOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTransitGatewayRouteInput, DeleteTransitGatewayRouteOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
