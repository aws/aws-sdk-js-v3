import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRoute } from "../model/GetRoute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRouteInput } from "../types/GetRouteInput";
import { GetRouteOutput } from "../types/GetRouteOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetRouteInput";
export * from "../types/GetRouteOutput";
export * from "../types/GetRouteExceptionsUnion";

export class GetRouteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRouteInput,
      OutputTypesUnion,
      GetRouteOutput,
      ApiGatewayV2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRouteInput,
    GetRouteOutput,
    Uint8Array
  >();

  constructor(readonly input: GetRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRouteInput, GetRouteOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRouteInput, GetRouteOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
