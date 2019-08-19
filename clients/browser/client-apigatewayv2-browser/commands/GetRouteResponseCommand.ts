import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRouteResponse } from "../model/operations/GetRouteResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRouteResponseInput } from "../types/GetRouteResponseInput";
import { GetRouteResponseOutput } from "../types/GetRouteResponseOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetRouteResponseInput";
export * from "../types/GetRouteResponseOutput";
export * from "../types/GetRouteResponseExceptionsUnion";

export class GetRouteResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRouteResponseInput,
      OutputTypesUnion,
      GetRouteResponseOutput,
      ApiGatewayV2ResolvedConfiguration,
      Blob
    > {
  readonly model = GetRouteResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRouteResponseInput,
    GetRouteResponseOutput,
    Blob
  >();

  constructor(readonly input: GetRouteResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRouteResponseInput, GetRouteResponseOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRouteResponseInput, GetRouteResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
