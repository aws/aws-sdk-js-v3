import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SendBonus } from "../model/SendBonus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendBonusInput } from "../types/SendBonusInput";
import { SendBonusOutput } from "../types/SendBonusOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/SendBonusInput";
export * from "../types/SendBonusOutput";
export * from "../types/SendBonusExceptionsUnion";

export class SendBonusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendBonusInput,
      OutputTypesUnion,
      SendBonusOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = SendBonus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendBonusInput,
    SendBonusOutput,
    Blob
  >();

  constructor(readonly input: SendBonusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<SendBonusInput, SendBonusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendBonusInput, SendBonusOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
