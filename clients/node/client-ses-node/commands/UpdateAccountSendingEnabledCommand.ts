import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateAccountSendingEnabled } from "../model/UpdateAccountSendingEnabled";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAccountSendingEnabledInput } from "../types/UpdateAccountSendingEnabledInput";
import { UpdateAccountSendingEnabledOutput } from "../types/UpdateAccountSendingEnabledOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/UpdateAccountSendingEnabledInput";
export * from "../types/UpdateAccountSendingEnabledOutput";
export * from "../types/UpdateAccountSendingEnabledExceptionsUnion";

export class UpdateAccountSendingEnabledCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAccountSendingEnabledInput,
      OutputTypesUnion,
      UpdateAccountSendingEnabledOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateAccountSendingEnabled;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAccountSendingEnabledInput,
    UpdateAccountSendingEnabledOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateAccountSendingEnabledInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateAccountSendingEnabledInput,
    UpdateAccountSendingEnabledOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateAccountSendingEnabledInput,
        UpdateAccountSendingEnabledOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
