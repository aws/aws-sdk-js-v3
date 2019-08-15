import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteTransitGatewayRouteTable } from "../model/operations/DeleteTransitGatewayRouteTable";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTransitGatewayRouteTableInput } from "../types/DeleteTransitGatewayRouteTableInput";
import { DeleteTransitGatewayRouteTableOutput } from "../types/DeleteTransitGatewayRouteTableOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteTransitGatewayRouteTableInput";
export * from "../types/DeleteTransitGatewayRouteTableOutput";
export * from "../types/DeleteTransitGatewayRouteTableExceptionsUnion";

export class DeleteTransitGatewayRouteTableCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTransitGatewayRouteTableInput,
      OutputTypesUnion,
      DeleteTransitGatewayRouteTableOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteTransitGatewayRouteTable;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTransitGatewayRouteTableInput,
    DeleteTransitGatewayRouteTableOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteTransitGatewayRouteTableInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteTransitGatewayRouteTableInput,
    DeleteTransitGatewayRouteTableOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteTransitGatewayRouteTableInput,
        DeleteTransitGatewayRouteTableOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
