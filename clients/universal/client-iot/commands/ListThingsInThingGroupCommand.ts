import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListThingsInThingGroup } from "../model/ListThingsInThingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListThingsInThingGroupInput } from "../types/ListThingsInThingGroupInput";
import { ListThingsInThingGroupOutput } from "../types/ListThingsInThingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListThingsInThingGroupInput";
export * from "../types/ListThingsInThingGroupOutput";
export * from "../types/ListThingsInThingGroupExceptionsUnion";

export class ListThingsInThingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListThingsInThingGroupInput,
      OutputTypesUnion,
      ListThingsInThingGroupOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListThingsInThingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListThingsInThingGroupInput,
    ListThingsInThingGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: ListThingsInThingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListThingsInThingGroupInput,
    ListThingsInThingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListThingsInThingGroupInput, ListThingsInThingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
