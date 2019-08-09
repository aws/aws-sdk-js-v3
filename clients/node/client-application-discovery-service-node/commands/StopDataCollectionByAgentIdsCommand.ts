import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopDataCollectionByAgentIds } from "../model/StopDataCollectionByAgentIds";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopDataCollectionByAgentIdsInput } from "../types/StopDataCollectionByAgentIdsInput";
import { StopDataCollectionByAgentIdsOutput } from "../types/StopDataCollectionByAgentIdsOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/StopDataCollectionByAgentIdsInput";
export * from "../types/StopDataCollectionByAgentIdsOutput";
export * from "../types/StopDataCollectionByAgentIdsExceptionsUnion";

export class StopDataCollectionByAgentIdsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopDataCollectionByAgentIdsInput,
      OutputTypesUnion,
      StopDataCollectionByAgentIdsOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopDataCollectionByAgentIds;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopDataCollectionByAgentIdsInput,
    StopDataCollectionByAgentIdsOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopDataCollectionByAgentIdsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopDataCollectionByAgentIdsInput,
    StopDataCollectionByAgentIdsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StopDataCollectionByAgentIdsInput,
        StopDataCollectionByAgentIdsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
