import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDetectorModels } from "../model/ListDetectorModels";
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
      _stream.Readable
    > {
  readonly model = ListDetectorModels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDetectorModelsInput,
    ListDetectorModelsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDetectorModelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
