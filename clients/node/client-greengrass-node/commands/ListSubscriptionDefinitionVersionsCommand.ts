import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSubscriptionDefinitionVersions } from "../model/ListSubscriptionDefinitionVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSubscriptionDefinitionVersionsInput } from "../types/ListSubscriptionDefinitionVersionsInput";
import { ListSubscriptionDefinitionVersionsOutput } from "../types/ListSubscriptionDefinitionVersionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListSubscriptionDefinitionVersionsInput";
export * from "../types/ListSubscriptionDefinitionVersionsOutput";
export * from "../types/ListSubscriptionDefinitionVersionsExceptionsUnion";

export class ListSubscriptionDefinitionVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSubscriptionDefinitionVersionsInput,
      OutputTypesUnion,
      ListSubscriptionDefinitionVersionsOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSubscriptionDefinitionVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSubscriptionDefinitionVersionsInput,
    ListSubscriptionDefinitionVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSubscriptionDefinitionVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSubscriptionDefinitionVersionsInput,
    ListSubscriptionDefinitionVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListSubscriptionDefinitionVersionsInput,
        ListSubscriptionDefinitionVersionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
