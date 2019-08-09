import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateThingGroupsForThing } from "../model/UpdateThingGroupsForThing";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateThingGroupsForThingInput } from "../types/UpdateThingGroupsForThingInput";
import { UpdateThingGroupsForThingOutput } from "../types/UpdateThingGroupsForThingOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateThingGroupsForThingInput";
export * from "../types/UpdateThingGroupsForThingOutput";
export * from "../types/UpdateThingGroupsForThingExceptionsUnion";

export class UpdateThingGroupsForThingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateThingGroupsForThingInput,
      OutputTypesUnion,
      UpdateThingGroupsForThingOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateThingGroupsForThing;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateThingGroupsForThingInput,
    UpdateThingGroupsForThingOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateThingGroupsForThingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateThingGroupsForThingInput,
    UpdateThingGroupsForThingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateThingGroupsForThingInput, UpdateThingGroupsForThingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
