import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyEventSubscription } from "../model/ModifyEventSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyEventSubscriptionInput } from "../types/ModifyEventSubscriptionInput";
import { ModifyEventSubscriptionOutput } from "../types/ModifyEventSubscriptionOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/ModifyEventSubscriptionInput";
export * from "../types/ModifyEventSubscriptionOutput";
export * from "../types/ModifyEventSubscriptionExceptionsUnion";

export class ModifyEventSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyEventSubscriptionInput,
      OutputTypesUnion,
      ModifyEventSubscriptionOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyEventSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyEventSubscriptionInput,
    ModifyEventSubscriptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyEventSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyEventSubscriptionInput,
    ModifyEventSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyEventSubscriptionInput, ModifyEventSubscriptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
