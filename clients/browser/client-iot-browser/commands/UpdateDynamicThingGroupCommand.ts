import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDynamicThingGroup } from "../model/UpdateDynamicThingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDynamicThingGroupInput } from "../types/UpdateDynamicThingGroupInput";
import { UpdateDynamicThingGroupOutput } from "../types/UpdateDynamicThingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateDynamicThingGroupInput";
export * from "../types/UpdateDynamicThingGroupOutput";
export * from "../types/UpdateDynamicThingGroupExceptionsUnion";

export class UpdateDynamicThingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDynamicThingGroupInput,
      OutputTypesUnion,
      UpdateDynamicThingGroupOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDynamicThingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDynamicThingGroupInput,
    UpdateDynamicThingGroupOutput,
    Blob
  >();

  constructor(readonly input: UpdateDynamicThingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDynamicThingGroupInput,
    UpdateDynamicThingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDynamicThingGroupInput, UpdateDynamicThingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
