import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetThingShadow } from "../model/operations/GetThingShadow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetThingShadowInput } from "../types/GetThingShadowInput";
import { GetThingShadowOutput } from "../types/GetThingShadowOutput";
import { IoTDataPlaneResolvedConfiguration } from "../IoTDataPlaneConfiguration";
export * from "../types/GetThingShadowInput";
export * from "../types/GetThingShadowOutput";
export * from "../types/GetThingShadowExceptionsUnion";

export class GetThingShadowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetThingShadowInput,
      OutputTypesUnion,
      GetThingShadowOutput,
      IoTDataPlaneResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetThingShadow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetThingShadowInput,
    GetThingShadowOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetThingShadowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTDataPlaneResolvedConfiguration
  ): __aws_sdk_types.Handler<GetThingShadowInput, GetThingShadowOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetThingShadowInput, GetThingShadowOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
