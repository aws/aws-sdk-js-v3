import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSubscriptionDefinitionVersion } from "../model/GetSubscriptionDefinitionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSubscriptionDefinitionVersionInput } from "../types/GetSubscriptionDefinitionVersionInput";
import { GetSubscriptionDefinitionVersionOutput } from "../types/GetSubscriptionDefinitionVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetSubscriptionDefinitionVersionInput";
export * from "../types/GetSubscriptionDefinitionVersionOutput";
export * from "../types/GetSubscriptionDefinitionVersionExceptionsUnion";

export class GetSubscriptionDefinitionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSubscriptionDefinitionVersionInput,
      OutputTypesUnion,
      GetSubscriptionDefinitionVersionOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetSubscriptionDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSubscriptionDefinitionVersionInput,
    GetSubscriptionDefinitionVersionOutput,
    Uint8Array
  >();

  constructor(readonly input: GetSubscriptionDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSubscriptionDefinitionVersionInput,
    GetSubscriptionDefinitionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetSubscriptionDefinitionVersionInput,
        GetSubscriptionDefinitionVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
