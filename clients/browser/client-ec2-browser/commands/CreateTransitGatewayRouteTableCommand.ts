import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTransitGatewayRouteTable } from "../model/CreateTransitGatewayRouteTable";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTransitGatewayRouteTableInput } from "../types/CreateTransitGatewayRouteTableInput";
import { CreateTransitGatewayRouteTableOutput } from "../types/CreateTransitGatewayRouteTableOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateTransitGatewayRouteTableInput";
export * from "../types/CreateTransitGatewayRouteTableOutput";
export * from "../types/CreateTransitGatewayRouteTableExceptionsUnion";

export class CreateTransitGatewayRouteTableCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTransitGatewayRouteTableInput,
      OutputTypesUnion,
      CreateTransitGatewayRouteTableOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateTransitGatewayRouteTable;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTransitGatewayRouteTableInput,
    CreateTransitGatewayRouteTableOutput,
    Blob
  >();

  constructor(readonly input: CreateTransitGatewayRouteTableInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateTransitGatewayRouteTableInput,
    CreateTransitGatewayRouteTableOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateTransitGatewayRouteTableInput,
        CreateTransitGatewayRouteTableOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
