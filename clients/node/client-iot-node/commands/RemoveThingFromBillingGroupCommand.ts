import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveThingFromBillingGroup } from "../model/RemoveThingFromBillingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveThingFromBillingGroupInput } from "../types/RemoveThingFromBillingGroupInput";
import { RemoveThingFromBillingGroupOutput } from "../types/RemoveThingFromBillingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/RemoveThingFromBillingGroupInput";
export * from "../types/RemoveThingFromBillingGroupOutput";
export * from "../types/RemoveThingFromBillingGroupExceptionsUnion";

export class RemoveThingFromBillingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveThingFromBillingGroupInput,
      OutputTypesUnion,
      RemoveThingFromBillingGroupOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveThingFromBillingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveThingFromBillingGroupInput,
    RemoveThingFromBillingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveThingFromBillingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveThingFromBillingGroupInput,
    RemoveThingFromBillingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RemoveThingFromBillingGroupInput,
        RemoveThingFromBillingGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
