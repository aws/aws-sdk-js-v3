import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTransitGatewayRouteTables } from "../model/DescribeTransitGatewayRouteTables";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTransitGatewayRouteTablesInput } from "../types/DescribeTransitGatewayRouteTablesInput";
import { DescribeTransitGatewayRouteTablesOutput } from "../types/DescribeTransitGatewayRouteTablesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeTransitGatewayRouteTablesInput";
export * from "../types/DescribeTransitGatewayRouteTablesOutput";
export * from "../types/DescribeTransitGatewayRouteTablesExceptionsUnion";

export class DescribeTransitGatewayRouteTablesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTransitGatewayRouteTablesInput,
      OutputTypesUnion,
      DescribeTransitGatewayRouteTablesOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeTransitGatewayRouteTables;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTransitGatewayRouteTablesInput,
    DescribeTransitGatewayRouteTablesOutput,
    Blob
  >();

  constructor(readonly input: DescribeTransitGatewayRouteTablesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTransitGatewayRouteTablesInput,
    DescribeTransitGatewayRouteTablesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTransitGatewayRouteTablesInput,
        DescribeTransitGatewayRouteTablesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
