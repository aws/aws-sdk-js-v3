import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDetectorModel } from "../model/operations/CreateDetectorModel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDetectorModelInput } from "../types/CreateDetectorModelInput";
import { CreateDetectorModelOutput } from "../types/CreateDetectorModelOutput";
import { IoTEventsResolvedConfiguration } from "../IoTEventsConfiguration";
export * from "../types/CreateDetectorModelInput";
export * from "../types/CreateDetectorModelOutput";
export * from "../types/CreateDetectorModelExceptionsUnion";

export class CreateDetectorModelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDetectorModelInput,
      OutputTypesUnion,
      CreateDetectorModelOutput,
      IoTEventsResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDetectorModel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDetectorModelInput,
    CreateDetectorModelOutput,
    Blob
  >();

  constructor(readonly input: CreateDetectorModelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDetectorModelInput,
    CreateDetectorModelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDetectorModelInput, CreateDetectorModelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
