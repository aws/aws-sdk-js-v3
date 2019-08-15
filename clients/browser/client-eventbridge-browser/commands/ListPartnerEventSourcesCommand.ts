import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPartnerEventSources } from "../model/operations/ListPartnerEventSources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPartnerEventSourcesInput } from "../types/ListPartnerEventSourcesInput";
import { ListPartnerEventSourcesOutput } from "../types/ListPartnerEventSourcesOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
export * from "../types/ListPartnerEventSourcesInput";
export * from "../types/ListPartnerEventSourcesOutput";
export * from "../types/ListPartnerEventSourcesExceptionsUnion";

export class ListPartnerEventSourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPartnerEventSourcesInput,
      OutputTypesUnion,
      ListPartnerEventSourcesOutput,
      EventBridgeResolvedConfiguration,
      Blob
    > {
  readonly model = ListPartnerEventSources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPartnerEventSourcesInput,
    ListPartnerEventSourcesOutput,
    Blob
  >();

  constructor(readonly input: ListPartnerEventSourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EventBridgeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPartnerEventSourcesInput,
    ListPartnerEventSourcesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPartnerEventSourcesInput, ListPartnerEventSourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
