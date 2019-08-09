import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSkillAuthorization } from "../model/DeleteSkillAuthorization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSkillAuthorizationInput } from "../types/DeleteSkillAuthorizationInput";
import { DeleteSkillAuthorizationOutput } from "../types/DeleteSkillAuthorizationOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DeleteSkillAuthorizationInput";
export * from "../types/DeleteSkillAuthorizationOutput";
export * from "../types/DeleteSkillAuthorizationExceptionsUnion";

export class DeleteSkillAuthorizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSkillAuthorizationInput,
      OutputTypesUnion,
      DeleteSkillAuthorizationOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSkillAuthorization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSkillAuthorizationInput,
    DeleteSkillAuthorizationOutput,
    Blob
  >();

  constructor(readonly input: DeleteSkillAuthorizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSkillAuthorizationInput,
    DeleteSkillAuthorizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSkillAuthorizationInput, DeleteSkillAuthorizationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
