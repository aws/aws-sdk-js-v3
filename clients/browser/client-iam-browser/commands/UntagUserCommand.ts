import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UntagUser } from "../model/operations/UntagUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UntagUserInput } from "../types/UntagUserInput";
import { UntagUserOutput } from "../types/UntagUserOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UntagUserInput";
export * from "../types/UntagUserOutput";
export * from "../types/UntagUserExceptionsUnion";

export class UntagUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UntagUserInput,
      OutputTypesUnion,
      UntagUserOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = UntagUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagUserInput,
    UntagUserOutput,
    Blob
  >();

  constructor(readonly input: UntagUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<UntagUserInput, UntagUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UntagUserInput, UntagUserOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
