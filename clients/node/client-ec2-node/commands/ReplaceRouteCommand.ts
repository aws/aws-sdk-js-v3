import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ReplaceRoute } from "../model/operations/ReplaceRoute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReplaceRouteInput } from "../types/ReplaceRouteInput";
import { ReplaceRouteOutput } from "../types/ReplaceRouteOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ReplaceRouteInput";
export * from "../types/ReplaceRouteOutput";
export * from "../types/ReplaceRouteExceptionsUnion";

export class ReplaceRouteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReplaceRouteInput,
      OutputTypesUnion,
      ReplaceRouteOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ReplaceRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReplaceRouteInput,
    ReplaceRouteOutput,
    _stream.Readable
  >();

  constructor(readonly input: ReplaceRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ReplaceRouteInput, ReplaceRouteOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReplaceRouteInput, ReplaceRouteOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
