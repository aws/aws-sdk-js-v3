import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSubscriptionDefinitions } from "../model/operations/ListSubscriptionDefinitions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSubscriptionDefinitionsInput } from "../types/ListSubscriptionDefinitionsInput";
import { ListSubscriptionDefinitionsOutput } from "../types/ListSubscriptionDefinitionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListSubscriptionDefinitionsInput";
export * from "../types/ListSubscriptionDefinitionsOutput";
export * from "../types/ListSubscriptionDefinitionsExceptionsUnion";

export class ListSubscriptionDefinitionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSubscriptionDefinitionsInput,
      OutputTypesUnion,
      ListSubscriptionDefinitionsOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSubscriptionDefinitions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSubscriptionDefinitionsInput,
    ListSubscriptionDefinitionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSubscriptionDefinitionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSubscriptionDefinitionsInput,
    ListSubscriptionDefinitionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListSubscriptionDefinitionsInput,
        ListSubscriptionDefinitionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
