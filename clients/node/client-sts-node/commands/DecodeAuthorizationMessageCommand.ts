import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DecodeAuthorizationMessage } from "../model/DecodeAuthorizationMessage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DecodeAuthorizationMessageInput } from "../types/DecodeAuthorizationMessageInput";
import { DecodeAuthorizationMessageOutput } from "../types/DecodeAuthorizationMessageOutput";
import { STSResolvedConfiguration } from "../STSConfiguration";
export * from "../types/DecodeAuthorizationMessageInput";
export * from "../types/DecodeAuthorizationMessageOutput";
export * from "../types/DecodeAuthorizationMessageExceptionsUnion";

export class DecodeAuthorizationMessageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DecodeAuthorizationMessageInput,
      OutputTypesUnion,
      DecodeAuthorizationMessageOutput,
      STSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DecodeAuthorizationMessage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DecodeAuthorizationMessageInput,
    DecodeAuthorizationMessageOutput,
    _stream.Readable
  >();

  constructor(readonly input: DecodeAuthorizationMessageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: STSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DecodeAuthorizationMessageInput,
    DecodeAuthorizationMessageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DecodeAuthorizationMessageInput,
        DecodeAuthorizationMessageOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
