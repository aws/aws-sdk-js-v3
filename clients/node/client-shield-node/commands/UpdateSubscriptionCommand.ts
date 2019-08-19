import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateSubscription } from "../model/operations/UpdateSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSubscriptionInput } from "../types/UpdateSubscriptionInput";
import { UpdateSubscriptionOutput } from "../types/UpdateSubscriptionOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/UpdateSubscriptionInput";
export * from "../types/UpdateSubscriptionOutput";
export * from "../types/UpdateSubscriptionExceptionsUnion";

export class UpdateSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSubscriptionInput,
      OutputTypesUnion,
      UpdateSubscriptionOutput,
      ShieldResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSubscriptionInput,
    UpdateSubscriptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSubscriptionInput,
    UpdateSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSubscriptionInput, UpdateSubscriptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
