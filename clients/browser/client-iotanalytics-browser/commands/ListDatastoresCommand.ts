import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDatastores } from "../model/ListDatastores";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDatastoresInput } from "../types/ListDatastoresInput";
import { ListDatastoresOutput } from "../types/ListDatastoresOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/ListDatastoresInput";
export * from "../types/ListDatastoresOutput";
export * from "../types/ListDatastoresExceptionsUnion";

export class ListDatastoresCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDatastoresInput,
      OutputTypesUnion,
      ListDatastoresOutput,
      IoTAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = ListDatastores;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDatastoresInput,
    ListDatastoresOutput,
    Blob
  >();

  constructor(readonly input: ListDatastoresInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDatastoresInput, ListDatastoresOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDatastoresInput, ListDatastoresOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
