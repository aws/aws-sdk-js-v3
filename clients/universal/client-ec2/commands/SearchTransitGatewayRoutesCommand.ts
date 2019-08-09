import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchTransitGatewayRoutes } from "../model/SearchTransitGatewayRoutes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchTransitGatewayRoutesInput } from "../types/SearchTransitGatewayRoutesInput";
import { SearchTransitGatewayRoutesOutput } from "../types/SearchTransitGatewayRoutesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/SearchTransitGatewayRoutesInput";
export * from "../types/SearchTransitGatewayRoutesOutput";
export * from "../types/SearchTransitGatewayRoutesExceptionsUnion";

export class SearchTransitGatewayRoutesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchTransitGatewayRoutesInput,
      OutputTypesUnion,
      SearchTransitGatewayRoutesOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SearchTransitGatewayRoutes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchTransitGatewayRoutesInput,
    SearchTransitGatewayRoutesOutput,
    Uint8Array
  >();

  constructor(readonly input: SearchTransitGatewayRoutesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SearchTransitGatewayRoutesInput,
    SearchTransitGatewayRoutesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SearchTransitGatewayRoutesInput,
        SearchTransitGatewayRoutesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
