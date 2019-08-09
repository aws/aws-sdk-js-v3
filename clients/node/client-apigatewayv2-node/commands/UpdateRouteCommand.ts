import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateRoute } from "../model/UpdateRoute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRouteInput } from "../types/UpdateRouteInput";
import { UpdateRouteOutput } from "../types/UpdateRouteOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/UpdateRouteInput";
export * from "../types/UpdateRouteOutput";
export * from "../types/UpdateRouteExceptionsUnion";

export class UpdateRouteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRouteInput,
      OutputTypesUnion,
      UpdateRouteOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRouteInput,
    UpdateRouteOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateRouteInput, UpdateRouteOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRouteInput, UpdateRouteOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
