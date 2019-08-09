import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAccountSendingEnabled } from "../model/GetAccountSendingEnabled";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAccountSendingEnabledInput } from "../types/GetAccountSendingEnabledInput";
import { GetAccountSendingEnabledOutput } from "../types/GetAccountSendingEnabledOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/GetAccountSendingEnabledInput";
export * from "../types/GetAccountSendingEnabledOutput";
export * from "../types/GetAccountSendingEnabledExceptionsUnion";

export class GetAccountSendingEnabledCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAccountSendingEnabledInput,
      OutputTypesUnion,
      GetAccountSendingEnabledOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAccountSendingEnabled;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAccountSendingEnabledInput,
    GetAccountSendingEnabledOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAccountSendingEnabledInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAccountSendingEnabledInput,
    GetAccountSendingEnabledOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAccountSendingEnabledInput, GetAccountSendingEnabledOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
