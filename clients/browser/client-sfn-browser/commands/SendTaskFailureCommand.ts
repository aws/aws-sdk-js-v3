import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SendTaskFailure } from "../model/SendTaskFailure";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendTaskFailureInput } from "../types/SendTaskFailureInput";
import { SendTaskFailureOutput } from "../types/SendTaskFailureOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/SendTaskFailureInput";
export * from "../types/SendTaskFailureOutput";
export * from "../types/SendTaskFailureExceptionsUnion";

export class SendTaskFailureCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendTaskFailureInput,
      OutputTypesUnion,
      SendTaskFailureOutput,
      SFNResolvedConfiguration,
      Blob
    > {
  readonly model = SendTaskFailure;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendTaskFailureInput,
    SendTaskFailureOutput,
    Blob
  >();

  constructor(readonly input: SendTaskFailureInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<SendTaskFailureInput, SendTaskFailureOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendTaskFailureInput, SendTaskFailureOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
