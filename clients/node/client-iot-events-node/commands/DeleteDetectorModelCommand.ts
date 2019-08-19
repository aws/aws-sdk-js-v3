import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDetectorModel } from "../model/operations/DeleteDetectorModel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDetectorModelInput } from "../types/DeleteDetectorModelInput";
import { DeleteDetectorModelOutput } from "../types/DeleteDetectorModelOutput";
import { IoTEventsResolvedConfiguration } from "../IoTEventsConfiguration";
export * from "../types/DeleteDetectorModelInput";
export * from "../types/DeleteDetectorModelOutput";
export * from "../types/DeleteDetectorModelExceptionsUnion";

export class DeleteDetectorModelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDetectorModelInput,
      OutputTypesUnion,
      DeleteDetectorModelOutput,
      IoTEventsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDetectorModel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDetectorModelInput,
    DeleteDetectorModelOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDetectorModelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDetectorModelInput,
    DeleteDetectorModelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDetectorModelInput, DeleteDetectorModelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
