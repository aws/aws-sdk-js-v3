import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDynamicThingGroup } from "../model/operations/DeleteDynamicThingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDynamicThingGroupInput } from "../types/DeleteDynamicThingGroupInput";
import { DeleteDynamicThingGroupOutput } from "../types/DeleteDynamicThingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteDynamicThingGroupInput";
export * from "../types/DeleteDynamicThingGroupOutput";
export * from "../types/DeleteDynamicThingGroupExceptionsUnion";

export class DeleteDynamicThingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDynamicThingGroupInput,
      OutputTypesUnion,
      DeleteDynamicThingGroupOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDynamicThingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDynamicThingGroupInput,
    DeleteDynamicThingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDynamicThingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDynamicThingGroupInput,
    DeleteDynamicThingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDynamicThingGroupInput, DeleteDynamicThingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
