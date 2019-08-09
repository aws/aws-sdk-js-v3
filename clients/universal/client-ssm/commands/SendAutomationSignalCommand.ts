import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SendAutomationSignal } from "../model/SendAutomationSignal";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendAutomationSignalInput } from "../types/SendAutomationSignalInput";
import { SendAutomationSignalOutput } from "../types/SendAutomationSignalOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/SendAutomationSignalInput";
export * from "../types/SendAutomationSignalOutput";
export * from "../types/SendAutomationSignalExceptionsUnion";

export class SendAutomationSignalCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendAutomationSignalInput,
      OutputTypesUnion,
      SendAutomationSignalOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SendAutomationSignal;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendAutomationSignalInput,
    SendAutomationSignalOutput,
    Uint8Array
  >();

  constructor(readonly input: SendAutomationSignalInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SendAutomationSignalInput,
    SendAutomationSignalOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendAutomationSignalInput, SendAutomationSignalOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
