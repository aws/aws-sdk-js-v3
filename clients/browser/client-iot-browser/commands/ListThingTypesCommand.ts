import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListThingTypes } from "../model/operations/ListThingTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListThingTypesInput } from "../types/ListThingTypesInput";
import { ListThingTypesOutput } from "../types/ListThingTypesOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListThingTypesInput";
export * from "../types/ListThingTypesOutput";
export * from "../types/ListThingTypesExceptionsUnion";

export class ListThingTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListThingTypesInput,
      OutputTypesUnion,
      ListThingTypesOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListThingTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListThingTypesInput,
    ListThingTypesOutput,
    Blob
  >();

  constructor(readonly input: ListThingTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<ListThingTypesInput, ListThingTypesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListThingTypesInput, ListThingTypesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
