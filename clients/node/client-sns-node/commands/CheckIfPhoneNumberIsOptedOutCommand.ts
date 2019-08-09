import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CheckIfPhoneNumberIsOptedOut } from "../model/CheckIfPhoneNumberIsOptedOut";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CheckIfPhoneNumberIsOptedOutInput } from "../types/CheckIfPhoneNumberIsOptedOutInput";
import { CheckIfPhoneNumberIsOptedOutOutput } from "../types/CheckIfPhoneNumberIsOptedOutOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/CheckIfPhoneNumberIsOptedOutInput";
export * from "../types/CheckIfPhoneNumberIsOptedOutOutput";
export * from "../types/CheckIfPhoneNumberIsOptedOutExceptionsUnion";

export class CheckIfPhoneNumberIsOptedOutCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CheckIfPhoneNumberIsOptedOutInput,
      OutputTypesUnion,
      CheckIfPhoneNumberIsOptedOutOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CheckIfPhoneNumberIsOptedOut;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CheckIfPhoneNumberIsOptedOutInput,
    CheckIfPhoneNumberIsOptedOutOutput,
    _stream.Readable
  >();

  constructor(readonly input: CheckIfPhoneNumberIsOptedOutInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CheckIfPhoneNumberIsOptedOutInput,
    CheckIfPhoneNumberIsOptedOutOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CheckIfPhoneNumberIsOptedOutInput,
        CheckIfPhoneNumberIsOptedOutOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
