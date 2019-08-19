import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListThingGroupsForThing } from "../model/operations/ListThingGroupsForThing";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListThingGroupsForThingInput } from "../types/ListThingGroupsForThingInput";
import { ListThingGroupsForThingOutput } from "../types/ListThingGroupsForThingOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListThingGroupsForThingInput";
export * from "../types/ListThingGroupsForThingOutput";
export * from "../types/ListThingGroupsForThingExceptionsUnion";

export class ListThingGroupsForThingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListThingGroupsForThingInput,
      OutputTypesUnion,
      ListThingGroupsForThingOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListThingGroupsForThing;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListThingGroupsForThingInput,
    ListThingGroupsForThingOutput,
    Blob
  >();

  constructor(readonly input: ListThingGroupsForThingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListThingGroupsForThingInput,
    ListThingGroupsForThingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListThingGroupsForThingInput, ListThingGroupsForThingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
