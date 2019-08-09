import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateContactFromAddressBook } from "../model/DisassociateContactFromAddressBook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateContactFromAddressBookInput } from "../types/DisassociateContactFromAddressBookInput";
import { DisassociateContactFromAddressBookOutput } from "../types/DisassociateContactFromAddressBookOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DisassociateContactFromAddressBookInput";
export * from "../types/DisassociateContactFromAddressBookOutput";
export * from "../types/DisassociateContactFromAddressBookExceptionsUnion";

export class DisassociateContactFromAddressBookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateContactFromAddressBookInput,
      OutputTypesUnion,
      DisassociateContactFromAddressBookOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DisassociateContactFromAddressBook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateContactFromAddressBookInput,
    DisassociateContactFromAddressBookOutput,
    Uint8Array
  >();

  constructor(readonly input: DisassociateContactFromAddressBookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateContactFromAddressBookInput,
    DisassociateContactFromAddressBookOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateContactFromAddressBookInput,
        DisassociateContactFromAddressBookOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
