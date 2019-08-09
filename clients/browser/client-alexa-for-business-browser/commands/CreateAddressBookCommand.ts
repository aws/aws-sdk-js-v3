import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateAddressBook } from "../model/CreateAddressBook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAddressBookInput } from "../types/CreateAddressBookInput";
import { CreateAddressBookOutput } from "../types/CreateAddressBookOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/CreateAddressBookInput";
export * from "../types/CreateAddressBookOutput";
export * from "../types/CreateAddressBookExceptionsUnion";

export class CreateAddressBookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAddressBookInput,
      OutputTypesUnion,
      CreateAddressBookOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = CreateAddressBook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAddressBookInput,
    CreateAddressBookOutput,
    Blob
  >();

  constructor(readonly input: CreateAddressBookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateAddressBookInput, CreateAddressBookOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAddressBookInput, CreateAddressBookOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
