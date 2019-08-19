import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDetectorModel } from "../model/operations/UpdateDetectorModel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDetectorModelInput } from "../types/UpdateDetectorModelInput";
import { UpdateDetectorModelOutput } from "../types/UpdateDetectorModelOutput";
import { IoTEventsResolvedConfiguration } from "../IoTEventsConfiguration";
export * from "../types/UpdateDetectorModelInput";
export * from "../types/UpdateDetectorModelOutput";
export * from "../types/UpdateDetectorModelExceptionsUnion";

export class UpdateDetectorModelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDetectorModelInput,
      OutputTypesUnion,
      UpdateDetectorModelOutput,
      IoTEventsResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDetectorModel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDetectorModelInput,
    UpdateDetectorModelOutput,
    Blob
  >();

  constructor(readonly input: UpdateDetectorModelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDetectorModelInput,
    UpdateDetectorModelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDetectorModelInput, UpdateDetectorModelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
