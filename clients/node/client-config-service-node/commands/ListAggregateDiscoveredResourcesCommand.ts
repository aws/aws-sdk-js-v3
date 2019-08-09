import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAggregateDiscoveredResources } from "../model/ListAggregateDiscoveredResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAggregateDiscoveredResourcesInput } from "../types/ListAggregateDiscoveredResourcesInput";
import { ListAggregateDiscoveredResourcesOutput } from "../types/ListAggregateDiscoveredResourcesOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/ListAggregateDiscoveredResourcesInput";
export * from "../types/ListAggregateDiscoveredResourcesOutput";
export * from "../types/ListAggregateDiscoveredResourcesExceptionsUnion";

export class ListAggregateDiscoveredResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAggregateDiscoveredResourcesInput,
      OutputTypesUnion,
      ListAggregateDiscoveredResourcesOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAggregateDiscoveredResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAggregateDiscoveredResourcesInput,
    ListAggregateDiscoveredResourcesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAggregateDiscoveredResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAggregateDiscoveredResourcesInput,
    ListAggregateDiscoveredResourcesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListAggregateDiscoveredResourcesInput,
        ListAggregateDiscoveredResourcesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
