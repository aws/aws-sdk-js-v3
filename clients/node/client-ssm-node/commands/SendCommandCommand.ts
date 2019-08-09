import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SendCommand } from "../model/SendCommand";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendCommandInput } from "../types/SendCommandInput";
import { SendCommandOutput } from "../types/SendCommandOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/SendCommandInput";
export * from "../types/SendCommandOutput";
export * from "../types/SendCommandExceptionsUnion";

export class SendCommandCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendCommandInput,
      OutputTypesUnion,
      SendCommandOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SendCommand;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendCommandInput,
    SendCommandOutput,
    _stream.Readable
  >();

  constructor(readonly input: SendCommandInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<SendCommandInput, SendCommandOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendCommandInput, SendCommandOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
