import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateThingGroup } from "../model/operations/UpdateThingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateThingGroupInput } from "../types/UpdateThingGroupInput";
import { UpdateThingGroupOutput } from "../types/UpdateThingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateThingGroupInput";
export * from "../types/UpdateThingGroupOutput";
export * from "../types/UpdateThingGroupExceptionsUnion";

export class UpdateThingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateThingGroupInput,
      OutputTypesUnion,
      UpdateThingGroupOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateThingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateThingGroupInput,
    UpdateThingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateThingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateThingGroupInput, UpdateThingGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateThingGroupInput, UpdateThingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
