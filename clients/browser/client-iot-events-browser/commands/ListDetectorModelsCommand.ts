import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDetectorModels } from "../model/operations/ListDetectorModels";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDetectorModelsInput } from "../types/ListDetectorModelsInput";
import { ListDetectorModelsOutput } from "../types/ListDetectorModelsOutput";
import { IoTEventsResolvedConfiguration } from "../IoTEventsConfiguration";
export * from "../types/ListDetectorModelsInput";
export * from "../types/ListDetectorModelsOutput";
export * from "../types/ListDetectorModelsExceptionsUnion";

export class ListDetectorModelsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDetectorModelsInput,
      OutputTypesUnion,
      ListDetectorModelsOutput,
      IoTEventsResolvedConfiguration,
      Blob
    > {
  readonly model = ListDetectorModels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDetectorModelsInput,
    ListDetectorModelsOutput,
    Blob
  >();

  constructor(readonly input: ListDetectorModelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDetectorModelsInput,
    ListDetectorModelsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDetectorModelsInput, ListDetectorModelsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
