import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDetectors } from "../model/ListDetectors";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDetectorsInput } from "../types/ListDetectorsInput";
import { ListDetectorsOutput } from "../types/ListDetectorsOutput";
import { IoTEventsDataResolvedConfiguration } from "../IoTEventsDataConfiguration";
export * from "../types/ListDetectorsInput";
export * from "../types/ListDetectorsOutput";
export * from "../types/ListDetectorsExceptionsUnion";

export class ListDetectorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDetectorsInput,
      OutputTypesUnion,
      ListDetectorsOutput,
      IoTEventsDataResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListDetectors;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDetectorsInput,
    ListDetectorsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListDetectorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTEventsDataResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDetectorsInput, ListDetectorsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDetectorsInput, ListDetectorsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
