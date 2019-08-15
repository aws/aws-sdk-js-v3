import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SignOutUser } from "../model/operations/SignOutUser";
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
      _stream.Readable
    > {
  readonly model = SignOutUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SignOutUserInput,
    SignOutUserOutput,
    _stream.Readable
  >();

  constructor(readonly input: SignOutUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
