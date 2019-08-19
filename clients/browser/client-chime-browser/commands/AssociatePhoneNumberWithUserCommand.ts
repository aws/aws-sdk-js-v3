import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociatePhoneNumberWithUser } from "../model/operations/AssociatePhoneNumberWithUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociatePhoneNumberWithUserInput } from "../types/AssociatePhoneNumberWithUserInput";
import { AssociatePhoneNumberWithUserOutput } from "../types/AssociatePhoneNumberWithUserOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/AssociatePhoneNumberWithUserInput";
export * from "../types/AssociatePhoneNumberWithUserOutput";
export * from "../types/AssociatePhoneNumberWithUserExceptionsUnion";

export class AssociatePhoneNumberWithUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociatePhoneNumberWithUserInput,
      OutputTypesUnion,
      AssociatePhoneNumberWithUserOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = AssociatePhoneNumberWithUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociatePhoneNumberWithUserInput,
    AssociatePhoneNumberWithUserOutput,
    Blob
  >();

  constructor(readonly input: AssociatePhoneNumberWithUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociatePhoneNumberWithUserInput,
    AssociatePhoneNumberWithUserOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociatePhoneNumberWithUserInput,
        AssociatePhoneNumberWithUserOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
