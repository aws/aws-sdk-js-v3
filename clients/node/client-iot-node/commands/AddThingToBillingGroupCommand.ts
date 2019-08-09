import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddThingToBillingGroup } from "../model/AddThingToBillingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddThingToBillingGroupInput } from "../types/AddThingToBillingGroupInput";
import { AddThingToBillingGroupOutput } from "../types/AddThingToBillingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/AddThingToBillingGroupInput";
export * from "../types/AddThingToBillingGroupOutput";
export * from "../types/AddThingToBillingGroupExceptionsUnion";

export class AddThingToBillingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddThingToBillingGroupInput,
      OutputTypesUnion,
      AddThingToBillingGroupOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddThingToBillingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddThingToBillingGroupInput,
    AddThingToBillingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddThingToBillingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddThingToBillingGroupInput,
    AddThingToBillingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddThingToBillingGroupInput, AddThingToBillingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
