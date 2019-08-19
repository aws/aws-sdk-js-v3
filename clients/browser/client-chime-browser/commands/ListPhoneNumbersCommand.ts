import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPhoneNumbers } from "../model/operations/ListPhoneNumbers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPhoneNumbersInput } from "../types/ListPhoneNumbersInput";
import { ListPhoneNumbersOutput } from "../types/ListPhoneNumbersOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/ListPhoneNumbersInput";
export * from "../types/ListPhoneNumbersOutput";
export * from "../types/ListPhoneNumbersExceptionsUnion";

export class ListPhoneNumbersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPhoneNumbersInput,
      OutputTypesUnion,
      ListPhoneNumbersOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = ListPhoneNumbers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPhoneNumbersInput,
    ListPhoneNumbersOutput,
    Blob
  >();

  constructor(readonly input: ListPhoneNumbersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<ListPhoneNumbersInput, ListPhoneNumbersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPhoneNumbersInput, ListPhoneNumbersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
