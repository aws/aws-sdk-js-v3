import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSubscriptionDefinitionVersion } from "../model/operations/GetSubscriptionDefinitionVersion";
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
      _stream.Readable
    > {
  readonly model = GetSubscriptionDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSubscriptionDefinitionVersionInput,
    GetSubscriptionDefinitionVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSubscriptionDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
