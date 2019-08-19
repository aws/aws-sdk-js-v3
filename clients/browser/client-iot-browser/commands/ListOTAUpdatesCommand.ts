import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListOTAUpdates } from "../model/operations/ListOTAUpdates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOTAUpdatesInput } from "../types/ListOTAUpdatesInput";
import { ListOTAUpdatesOutput } from "../types/ListOTAUpdatesOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListOTAUpdatesInput";
export * from "../types/ListOTAUpdatesOutput";
export * from "../types/ListOTAUpdatesExceptionsUnion";

export class ListOTAUpdatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOTAUpdatesInput,
      OutputTypesUnion,
      ListOTAUpdatesOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListOTAUpdates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOTAUpdatesInput,
    ListOTAUpdatesOutput,
    Blob
  >();

  constructor(readonly input: ListOTAUpdatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<ListOTAUpdatesInput, ListOTAUpdatesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListOTAUpdatesInput, ListOTAUpdatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
