import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = GetRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRouteInput,
    GetRouteOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
