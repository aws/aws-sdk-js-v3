import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = DeleteAddressBook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAddressBookInput,
    DeleteAddressBookOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteAddressBookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
