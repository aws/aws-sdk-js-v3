import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateContactWithAddressBook } from "../model/operations/AssociateContactWithAddressBook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateContactWithAddressBookInput } from "../types/AssociateContactWithAddressBookInput";
import { AssociateContactWithAddressBookOutput } from "../types/AssociateContactWithAddressBookOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/AssociateContactWithAddressBookInput";
export * from "../types/AssociateContactWithAddressBookOutput";
export * from "../types/AssociateContactWithAddressBookExceptionsUnion";

export class AssociateContactWithAddressBookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateContactWithAddressBookInput,
      OutputTypesUnion,
      AssociateContactWithAddressBookOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateContactWithAddressBook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateContactWithAddressBookInput,
    AssociateContactWithAddressBookOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateContactWithAddressBookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateContactWithAddressBookInput,
    AssociateContactWithAddressBookOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateContactWithAddressBookInput,
        AssociateContactWithAddressBookOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
