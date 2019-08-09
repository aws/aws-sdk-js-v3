import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAggregateDiscoveredResourceCounts } from "../model/GetAggregateDiscoveredResourceCounts";
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
      _stream.Readable
    > {
  readonly model = GetAggregateDiscoveredResourceCounts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAggregateDiscoveredResourceCountsInput,
    GetAggregateDiscoveredResourceCountsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAggregateDiscoveredResourceCountsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
