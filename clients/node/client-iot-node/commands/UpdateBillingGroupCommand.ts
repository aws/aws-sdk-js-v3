import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateBillingGroup } from "../model/operations/UpdateBillingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateBillingGroupInput } from "../types/UpdateBillingGroupInput";
import { UpdateBillingGroupOutput } from "../types/UpdateBillingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateBillingGroupInput";
export * from "../types/UpdateBillingGroupOutput";
export * from "../types/UpdateBillingGroupExceptionsUnion";

export class UpdateBillingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateBillingGroupInput,
      OutputTypesUnion,
      UpdateBillingGroupOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateBillingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateBillingGroupInput,
    UpdateBillingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateBillingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateBillingGroupInput,
    UpdateBillingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateBillingGroupInput, UpdateBillingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
