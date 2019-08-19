import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAggregateDiscoveredResourceCounts } from "../model/operations/GetAggregateDiscoveredResourceCounts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAggregateDiscoveredResourceCountsInput } from "../types/GetAggregateDiscoveredResourceCountsInput";
import { GetAggregateDiscoveredResourceCountsOutput } from "../types/GetAggregateDiscoveredResourceCountsOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/GetAggregateDiscoveredResourceCountsInput";
export * from "../types/GetAggregateDiscoveredResourceCountsOutput";
export * from "../types/GetAggregateDiscoveredResourceCountsExceptionsUnion";

export class GetAggregateDiscoveredResourceCountsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAggregateDiscoveredResourceCountsInput,
      OutputTypesUnion,
      GetAggregateDiscoveredResourceCountsOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = GetAggregateDiscoveredResourceCounts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAggregateDiscoveredResourceCountsInput,
    GetAggregateDiscoveredResourceCountsOutput,
    Blob
  >();

  constructor(readonly input: GetAggregateDiscoveredResourceCountsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAggregateDiscoveredResourceCountsInput,
    GetAggregateDiscoveredResourceCountsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetAggregateDiscoveredResourceCountsInput,
        GetAggregateDiscoveredResourceCountsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
