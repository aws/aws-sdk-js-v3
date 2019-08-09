import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutAccountSendingAttributes } from "../model/PutAccountSendingAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutAccountSendingAttributesInput } from "../types/PutAccountSendingAttributesInput";
import { PutAccountSendingAttributesOutput } from "../types/PutAccountSendingAttributesOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/PutAccountSendingAttributesInput";
export * from "../types/PutAccountSendingAttributesOutput";
export * from "../types/PutAccountSendingAttributesExceptionsUnion";

export class PutAccountSendingAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutAccountSendingAttributesInput,
      OutputTypesUnion,
      PutAccountSendingAttributesOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutAccountSendingAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutAccountSendingAttributesInput,
    PutAccountSendingAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutAccountSendingAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutAccountSendingAttributesInput,
    PutAccountSendingAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutAccountSendingAttributesInput,
        PutAccountSendingAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
