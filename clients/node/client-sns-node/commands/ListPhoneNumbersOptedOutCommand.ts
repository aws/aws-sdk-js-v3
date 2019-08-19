import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListPhoneNumbersOptedOut } from "../model/operations/ListPhoneNumbersOptedOut";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPhoneNumbersOptedOutInput } from "../types/ListPhoneNumbersOptedOutInput";
import { ListPhoneNumbersOptedOutOutput } from "../types/ListPhoneNumbersOptedOutOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/ListPhoneNumbersOptedOutInput";
export * from "../types/ListPhoneNumbersOptedOutOutput";
export * from "../types/ListPhoneNumbersOptedOutExceptionsUnion";

export class ListPhoneNumbersOptedOutCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPhoneNumbersOptedOutInput,
      OutputTypesUnion,
      ListPhoneNumbersOptedOutOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListPhoneNumbersOptedOut;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPhoneNumbersOptedOutInput,
    ListPhoneNumbersOptedOutOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListPhoneNumbersOptedOutInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPhoneNumbersOptedOutInput,
    ListPhoneNumbersOptedOutOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPhoneNumbersOptedOutInput, ListPhoneNumbersOptedOutOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
