import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddThingToThingGroup } from "../model/operations/AddThingToThingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddThingToThingGroupInput } from "../types/AddThingToThingGroupInput";
import { AddThingToThingGroupOutput } from "../types/AddThingToThingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/AddThingToThingGroupInput";
export * from "../types/AddThingToThingGroupOutput";
export * from "../types/AddThingToThingGroupExceptionsUnion";

export class AddThingToThingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddThingToThingGroupInput,
      OutputTypesUnion,
      AddThingToThingGroupOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddThingToThingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddThingToThingGroupInput,
    AddThingToThingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddThingToThingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddThingToThingGroupInput,
    AddThingToThingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddThingToThingGroupInput, AddThingToThingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
