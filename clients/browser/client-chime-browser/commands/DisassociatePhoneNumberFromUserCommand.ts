import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociatePhoneNumberFromUser } from "../model/DisassociatePhoneNumberFromUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociatePhoneNumberFromUserInput } from "../types/DisassociatePhoneNumberFromUserInput";
import { DisassociatePhoneNumberFromUserOutput } from "../types/DisassociatePhoneNumberFromUserOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/DisassociatePhoneNumberFromUserInput";
export * from "../types/DisassociatePhoneNumberFromUserOutput";
export * from "../types/DisassociatePhoneNumberFromUserExceptionsUnion";

export class DisassociatePhoneNumberFromUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociatePhoneNumberFromUserInput,
      OutputTypesUnion,
      DisassociatePhoneNumberFromUserOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociatePhoneNumberFromUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociatePhoneNumberFromUserInput,
    DisassociatePhoneNumberFromUserOutput,
    Blob
  >();

  constructor(readonly input: DisassociatePhoneNumberFromUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociatePhoneNumberFromUserInput,
    DisassociatePhoneNumberFromUserOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociatePhoneNumberFromUserInput,
        DisassociatePhoneNumberFromUserOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
