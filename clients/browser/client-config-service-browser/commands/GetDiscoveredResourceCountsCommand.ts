import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDiscoveredResourceCounts } from "../model/operations/GetDiscoveredResourceCounts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDiscoveredResourceCountsInput } from "../types/GetDiscoveredResourceCountsInput";
import { GetDiscoveredResourceCountsOutput } from "../types/GetDiscoveredResourceCountsOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/GetDiscoveredResourceCountsInput";
export * from "../types/GetDiscoveredResourceCountsOutput";
export * from "../types/GetDiscoveredResourceCountsExceptionsUnion";

export class GetDiscoveredResourceCountsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDiscoveredResourceCountsInput,
      OutputTypesUnion,
      GetDiscoveredResourceCountsOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = GetDiscoveredResourceCounts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDiscoveredResourceCountsInput,
    GetDiscoveredResourceCountsOutput,
    Blob
  >();

  constructor(readonly input: GetDiscoveredResourceCountsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDiscoveredResourceCountsInput,
    GetDiscoveredResourceCountsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetDiscoveredResourceCountsInput,
        GetDiscoveredResourceCountsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
