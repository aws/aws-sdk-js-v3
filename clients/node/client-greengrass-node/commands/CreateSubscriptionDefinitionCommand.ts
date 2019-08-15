import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSubscriptionDefinition } from "../model/operations/CreateSubscriptionDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSubscriptionDefinitionInput } from "../types/CreateSubscriptionDefinitionInput";
import { CreateSubscriptionDefinitionOutput } from "../types/CreateSubscriptionDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateSubscriptionDefinitionInput";
export * from "../types/CreateSubscriptionDefinitionOutput";
export * from "../types/CreateSubscriptionDefinitionExceptionsUnion";

export class CreateSubscriptionDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSubscriptionDefinitionInput,
      OutputTypesUnion,
      CreateSubscriptionDefinitionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSubscriptionDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSubscriptionDefinitionInput,
    CreateSubscriptionDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSubscriptionDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSubscriptionDefinitionInput,
    CreateSubscriptionDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateSubscriptionDefinitionInput,
        CreateSubscriptionDefinitionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
