import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSubscriptionDefinitionVersion } from "../model/operations/CreateSubscriptionDefinitionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSubscriptionDefinitionVersionInput } from "../types/CreateSubscriptionDefinitionVersionInput";
import { CreateSubscriptionDefinitionVersionOutput } from "../types/CreateSubscriptionDefinitionVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateSubscriptionDefinitionVersionInput";
export * from "../types/CreateSubscriptionDefinitionVersionOutput";
export * from "../types/CreateSubscriptionDefinitionVersionExceptionsUnion";

export class CreateSubscriptionDefinitionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSubscriptionDefinitionVersionInput,
      OutputTypesUnion,
      CreateSubscriptionDefinitionVersionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = CreateSubscriptionDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSubscriptionDefinitionVersionInput,
    CreateSubscriptionDefinitionVersionOutput,
    Blob
  >();

  constructor(readonly input: CreateSubscriptionDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSubscriptionDefinitionVersionInput,
    CreateSubscriptionDefinitionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateSubscriptionDefinitionVersionInput,
        CreateSubscriptionDefinitionVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
