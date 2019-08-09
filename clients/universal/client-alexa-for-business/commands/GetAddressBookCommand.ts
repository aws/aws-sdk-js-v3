import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAddressBook } from "../model/GetAddressBook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAddressBookInput } from "../types/GetAddressBookInput";
import { GetAddressBookOutput } from "../types/GetAddressBookOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/GetAddressBookInput";
export * from "../types/GetAddressBookOutput";
export * from "../types/GetAddressBookExceptionsUnion";

export class GetAddressBookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAddressBookInput,
      OutputTypesUnion,
      GetAddressBookOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetAddressBook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAddressBookInput,
    GetAddressBookOutput,
    Uint8Array
  >();

  constructor(readonly input: GetAddressBookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAddressBookInput, GetAddressBookOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAddressBookInput, GetAddressBookOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
