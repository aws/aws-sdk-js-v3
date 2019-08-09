import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SignOutUser } from "../model/SignOutUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SignOutUserInput } from "../types/SignOutUserInput";
import { SignOutUserOutput } from "../types/SignOutUserOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/SignOutUserInput";
export * from "../types/SignOutUserOutput";
export * from "../types/SignOutUserExceptionsUnion";

export class SignOutUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SignOutUserInput,
      OutputTypesUnion,
      SignOutUserOutput,
      WorkLinkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SignOutUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SignOutUserInput,
    SignOutUserOutput,
    Uint8Array
  >();

  constructor(readonly input: SignOutUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<SignOutUserInput, SignOutUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SignOutUserInput, SignOutUserOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
