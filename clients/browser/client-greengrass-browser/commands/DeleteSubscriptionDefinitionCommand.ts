import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSubscriptionDefinition } from "../model/DeleteSubscriptionDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSubscriptionDefinitionInput } from "../types/DeleteSubscriptionDefinitionInput";
import { DeleteSubscriptionDefinitionOutput } from "../types/DeleteSubscriptionDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/DeleteSubscriptionDefinitionInput";
export * from "../types/DeleteSubscriptionDefinitionOutput";
export * from "../types/DeleteSubscriptionDefinitionExceptionsUnion";

export class DeleteSubscriptionDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSubscriptionDefinitionInput,
      OutputTypesUnion,
      DeleteSubscriptionDefinitionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSubscriptionDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSubscriptionDefinitionInput,
    DeleteSubscriptionDefinitionOutput,
    Blob
  >();

  constructor(readonly input: DeleteSubscriptionDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSubscriptionDefinitionInput,
    DeleteSubscriptionDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteSubscriptionDefinitionInput,
        DeleteSubscriptionDefinitionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
