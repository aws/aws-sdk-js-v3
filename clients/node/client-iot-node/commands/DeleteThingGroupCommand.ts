import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteThingGroup } from "../model/DeleteThingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteThingGroupInput } from "../types/DeleteThingGroupInput";
import { DeleteThingGroupOutput } from "../types/DeleteThingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteThingGroupInput";
export * from "../types/DeleteThingGroupOutput";
export * from "../types/DeleteThingGroupExceptionsUnion";

export class DeleteThingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteThingGroupInput,
      OutputTypesUnion,
      DeleteThingGroupOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteThingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteThingGroupInput,
    DeleteThingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteThingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteThingGroupInput, DeleteThingGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteThingGroupInput, DeleteThingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
