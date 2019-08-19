import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSubscriptionState } from "../model/operations/GetSubscriptionState";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSubscriptionStateInput } from "../types/GetSubscriptionStateInput";
import { GetSubscriptionStateOutput } from "../types/GetSubscriptionStateOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/GetSubscriptionStateInput";
export * from "../types/GetSubscriptionStateOutput";
export * from "../types/GetSubscriptionStateExceptionsUnion";

export class GetSubscriptionStateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSubscriptionStateInput,
      OutputTypesUnion,
      GetSubscriptionStateOutput,
      ShieldResolvedConfiguration,
      Blob
    > {
  readonly model = GetSubscriptionState;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSubscriptionStateInput,
    GetSubscriptionStateOutput,
    Blob
  >();

  constructor(readonly input: GetSubscriptionStateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSubscriptionStateInput,
    GetSubscriptionStateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSubscriptionStateInput, GetSubscriptionStateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
