import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateRoute } from "../model/CreateRoute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRouteInput } from "../types/CreateRouteInput";
import { CreateRouteOutput } from "../types/CreateRouteOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/CreateRouteInput";
export * from "../types/CreateRouteOutput";
export * from "../types/CreateRouteExceptionsUnion";

export class CreateRouteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRouteInput,
      OutputTypesUnion,
      CreateRouteOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRouteInput,
    CreateRouteOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateRouteInput, CreateRouteOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRouteInput, CreateRouteOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
