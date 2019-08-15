import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RemoveThingFromThingGroup } from "../model/operations/RemoveThingFromThingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveThingFromThingGroupInput } from "../types/RemoveThingFromThingGroupInput";
import { RemoveThingFromThingGroupOutput } from "../types/RemoveThingFromThingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/RemoveThingFromThingGroupInput";
export * from "../types/RemoveThingFromThingGroupOutput";
export * from "../types/RemoveThingFromThingGroupExceptionsUnion";

export class RemoveThingFromThingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveThingFromThingGroupInput,
      OutputTypesUnion,
      RemoveThingFromThingGroupOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = RemoveThingFromThingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveThingFromThingGroupInput,
    RemoveThingFromThingGroupOutput,
    Blob
  >();

  constructor(readonly input: RemoveThingFromThingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveThingFromThingGroupInput,
    RemoveThingFromThingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveThingFromThingGroupInput, RemoveThingFromThingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
