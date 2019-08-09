import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ActivateUser } from "../model/ActivateUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ActivateUserInput } from "../types/ActivateUserInput";
import { ActivateUserOutput } from "../types/ActivateUserOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/ActivateUserInput";
export * from "../types/ActivateUserOutput";
export * from "../types/ActivateUserExceptionsUnion";

export class ActivateUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ActivateUserInput,
      OutputTypesUnion,
      ActivateUserOutput,
      WorkDocsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ActivateUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ActivateUserInput,
    ActivateUserOutput,
    Uint8Array
  >();

  constructor(readonly input: ActivateUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<ActivateUserInput, ActivateUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ActivateUserInput, ActivateUserOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
