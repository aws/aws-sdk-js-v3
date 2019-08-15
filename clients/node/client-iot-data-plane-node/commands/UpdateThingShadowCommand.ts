import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateThingShadow } from "../model/operations/UpdateThingShadow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateThingShadowInput } from "../types/UpdateThingShadowInput";
import { UpdateThingShadowOutput } from "../types/UpdateThingShadowOutput";
import { IoTDataPlaneResolvedConfiguration } from "../IoTDataPlaneConfiguration";
export * from "../types/UpdateThingShadowInput";
export * from "../types/UpdateThingShadowOutput";
export * from "../types/UpdateThingShadowExceptionsUnion";

export class UpdateThingShadowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateThingShadowInput,
      OutputTypesUnion,
      UpdateThingShadowOutput,
      IoTDataPlaneResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateThingShadow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateThingShadowInput,
    UpdateThingShadowOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateThingShadowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTDataPlaneResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateThingShadowInput, UpdateThingShadowOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateThingShadowInput, UpdateThingShadowOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
