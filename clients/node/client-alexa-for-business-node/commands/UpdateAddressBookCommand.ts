import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateAddressBook } from "../model/operations/UpdateAddressBook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAddressBookInput } from "../types/UpdateAddressBookInput";
import { UpdateAddressBookOutput } from "../types/UpdateAddressBookOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/UpdateAddressBookInput";
export * from "../types/UpdateAddressBookOutput";
export * from "../types/UpdateAddressBookExceptionsUnion";

export class UpdateAddressBookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAddressBookInput,
      OutputTypesUnion,
      UpdateAddressBookOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateAddressBook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAddressBookInput,
    UpdateAddressBookOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateAddressBookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateAddressBookInput, UpdateAddressBookOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAddressBookInput, UpdateAddressBookOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
