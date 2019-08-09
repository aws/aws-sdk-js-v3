import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAddressBook } from "../model/DeleteAddressBook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAddressBookInput } from "../types/DeleteAddressBookInput";
import { DeleteAddressBookOutput } from "../types/DeleteAddressBookOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DeleteAddressBookInput";
export * from "../types/DeleteAddressBookOutput";
export * from "../types/DeleteAddressBookExceptionsUnion";

export class DeleteAddressBookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAddressBookInput,
      OutputTypesUnion,
      DeleteAddressBookOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteAddressBook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAddressBookInput,
    DeleteAddressBookOutput,
    Blob
  >();

  constructor(readonly input: DeleteAddressBookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAddressBookInput, DeleteAddressBookOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAddressBookInput, DeleteAddressBookOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
