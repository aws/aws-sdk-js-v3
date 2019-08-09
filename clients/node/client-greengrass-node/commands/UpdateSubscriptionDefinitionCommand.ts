import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateSubscriptionDefinition } from "../model/UpdateSubscriptionDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSubscriptionDefinitionInput } from "../types/UpdateSubscriptionDefinitionInput";
import { UpdateSubscriptionDefinitionOutput } from "../types/UpdateSubscriptionDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/UpdateSubscriptionDefinitionInput";
export * from "../types/UpdateSubscriptionDefinitionOutput";
export * from "../types/UpdateSubscriptionDefinitionExceptionsUnion";

export class UpdateSubscriptionDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSubscriptionDefinitionInput,
      OutputTypesUnion,
      UpdateSubscriptionDefinitionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateSubscriptionDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSubscriptionDefinitionInput,
    UpdateSubscriptionDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateSubscriptionDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSubscriptionDefinitionInput,
    UpdateSubscriptionDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateSubscriptionDefinitionInput,
        UpdateSubscriptionDefinitionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
