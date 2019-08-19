import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDiscoverySummary } from "../model/operations/GetDiscoverySummary";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDiscoverySummaryInput } from "../types/GetDiscoverySummaryInput";
import { GetDiscoverySummaryOutput } from "../types/GetDiscoverySummaryOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/GetDiscoverySummaryInput";
export * from "../types/GetDiscoverySummaryOutput";
export * from "../types/GetDiscoverySummaryExceptionsUnion";

export class GetDiscoverySummaryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDiscoverySummaryInput,
      OutputTypesUnion,
      GetDiscoverySummaryOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDiscoverySummary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDiscoverySummaryInput,
    GetDiscoverySummaryOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDiscoverySummaryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDiscoverySummaryInput,
    GetDiscoverySummaryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDiscoverySummaryInput, GetDiscoverySummaryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
