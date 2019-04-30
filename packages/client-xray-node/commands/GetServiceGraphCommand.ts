import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetServiceGraph } from "../model/GetServiceGraph";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetServiceGraphInput } from "../types/GetServiceGraphInput";
import { GetServiceGraphOutput } from "../types/GetServiceGraphOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/GetServiceGraphInput";
export * from "../types/GetServiceGraphOutput";
export * from "../types/GetServiceGraphExceptionsUnion";

export class GetServiceGraphCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetServiceGraphInput,
      OutputTypesUnion,
      GetServiceGraphOutput,
      XRayResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetServiceGraphInput,
    GetServiceGraphOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetServiceGraphInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetServiceGraphInput, GetServiceGraphOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: GetServiceGraph
    };

    return stack.resolve(
      handler<GetServiceGraphInput, GetServiceGraphOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
