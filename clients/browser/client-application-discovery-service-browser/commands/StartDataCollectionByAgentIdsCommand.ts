import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartDataCollectionByAgentIds } from "../model/StartDataCollectionByAgentIds";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartDataCollectionByAgentIdsInput } from "../types/StartDataCollectionByAgentIdsInput";
import { StartDataCollectionByAgentIdsOutput } from "../types/StartDataCollectionByAgentIdsOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/StartDataCollectionByAgentIdsInput";
export * from "../types/StartDataCollectionByAgentIdsOutput";
export * from "../types/StartDataCollectionByAgentIdsExceptionsUnion";

export class StartDataCollectionByAgentIdsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartDataCollectionByAgentIdsInput,
      OutputTypesUnion,
      StartDataCollectionByAgentIdsOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = StartDataCollectionByAgentIds;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartDataCollectionByAgentIdsInput,
    StartDataCollectionByAgentIdsOutput,
    Blob
  >();

  constructor(readonly input: StartDataCollectionByAgentIdsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartDataCollectionByAgentIdsInput,
    StartDataCollectionByAgentIdsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartDataCollectionByAgentIdsInput,
        StartDataCollectionByAgentIdsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
