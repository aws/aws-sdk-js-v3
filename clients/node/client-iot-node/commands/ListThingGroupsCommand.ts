import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListThingGroups } from "../model/ListThingGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListThingGroupsInput } from "../types/ListThingGroupsInput";
import { ListThingGroupsOutput } from "../types/ListThingGroupsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListThingGroupsInput";
export * from "../types/ListThingGroupsOutput";
export * from "../types/ListThingGroupsExceptionsUnion";

export class ListThingGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListThingGroupsInput,
      OutputTypesUnion,
      ListThingGroupsOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListThingGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListThingGroupsInput,
    ListThingGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListThingGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<ListThingGroupsInput, ListThingGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListThingGroupsInput, ListThingGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
