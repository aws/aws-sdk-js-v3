import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteThingShadow } from "../model/DeleteThingShadow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteThingShadowInput } from "../types/DeleteThingShadowInput";
import { DeleteThingShadowOutput } from "../types/DeleteThingShadowOutput";
import { IoTDataPlaneResolvedConfiguration } from "../IoTDataPlaneConfiguration";
export * from "../types/DeleteThingShadowInput";
export * from "../types/DeleteThingShadowOutput";
export * from "../types/DeleteThingShadowExceptionsUnion";

export class DeleteThingShadowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteThingShadowInput,
      OutputTypesUnion,
      DeleteThingShadowOutput,
      IoTDataPlaneResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteThingShadow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteThingShadowInput,
    DeleteThingShadowOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteThingShadowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTDataPlaneResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteThingShadowInput, DeleteThingShadowOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteThingShadowInput, DeleteThingShadowOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
