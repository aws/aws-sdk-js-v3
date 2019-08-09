import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchAvailablePhoneNumbers } from "../model/SearchAvailablePhoneNumbers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchAvailablePhoneNumbersInput } from "../types/SearchAvailablePhoneNumbersInput";
import { SearchAvailablePhoneNumbersOutput } from "../types/SearchAvailablePhoneNumbersOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/SearchAvailablePhoneNumbersInput";
export * from "../types/SearchAvailablePhoneNumbersOutput";
export * from "../types/SearchAvailablePhoneNumbersExceptionsUnion";

export class SearchAvailablePhoneNumbersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchAvailablePhoneNumbersInput,
      OutputTypesUnion,
      SearchAvailablePhoneNumbersOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = SearchAvailablePhoneNumbers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchAvailablePhoneNumbersInput,
    SearchAvailablePhoneNumbersOutput,
    Blob
  >();

  constructor(readonly input: SearchAvailablePhoneNumbersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SearchAvailablePhoneNumbersInput,
    SearchAvailablePhoneNumbersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SearchAvailablePhoneNumbersInput,
        SearchAvailablePhoneNumbersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
