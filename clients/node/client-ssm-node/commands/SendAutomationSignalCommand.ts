import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SendAutomationSignal } from "../model/operations/SendAutomationSignal";
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
      _stream.Readable
    > {
  readonly model = SendAutomationSignal;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendAutomationSignalInput,
    SendAutomationSignalOutput,
    _stream.Readable
  >();

  constructor(readonly input: SendAutomationSignalInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
