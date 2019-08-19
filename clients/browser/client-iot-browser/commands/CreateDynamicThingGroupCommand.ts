import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDynamicThingGroup } from "../model/operations/CreateDynamicThingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDynamicThingGroupInput } from "../types/CreateDynamicThingGroupInput";
import { CreateDynamicThingGroupOutput } from "../types/CreateDynamicThingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CreateDynamicThingGroupInput";
export * from "../types/CreateDynamicThingGroupOutput";
export * from "../types/CreateDynamicThingGroupExceptionsUnion";

export class CreateDynamicThingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDynamicThingGroupInput,
      OutputTypesUnion,
      CreateDynamicThingGroupOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDynamicThingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDynamicThingGroupInput,
    CreateDynamicThingGroupOutput,
    Blob
  >();

  constructor(readonly input: CreateDynamicThingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDynamicThingGroupInput,
    CreateDynamicThingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDynamicThingGroupInput, CreateDynamicThingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
