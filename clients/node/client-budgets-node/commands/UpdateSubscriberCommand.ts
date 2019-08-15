import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateSubscriber } from "../model/operations/UpdateSubscriber";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSubscriberInput } from "../types/UpdateSubscriberInput";
import { UpdateSubscriberOutput } from "../types/UpdateSubscriberOutput";
import { BudgetsResolvedConfiguration } from "../BudgetsConfiguration";
export * from "../types/UpdateSubscriberInput";
export * from "../types/UpdateSubscriberOutput";
export * from "../types/UpdateSubscriberExceptionsUnion";

export class UpdateSubscriberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSubscriberInput,
      OutputTypesUnion,
      UpdateSubscriberOutput,
      BudgetsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateSubscriber;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSubscriberInput,
    UpdateSubscriberOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateSubscriberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BudgetsResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateSubscriberInput, UpdateSubscriberOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSubscriberInput, UpdateSubscriberOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
