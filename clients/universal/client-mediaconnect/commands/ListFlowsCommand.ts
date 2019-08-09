import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListFlows } from "../model/ListFlows";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFlowsInput } from "../types/ListFlowsInput";
import { ListFlowsOutput } from "../types/ListFlowsOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/ListFlowsInput";
export * from "../types/ListFlowsOutput";
export * from "../types/ListFlowsExceptionsUnion";

export class ListFlowsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFlowsInput,
      OutputTypesUnion,
      ListFlowsOutput,
      MediaConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListFlows;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFlowsInput,
    ListFlowsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListFlowsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<ListFlowsInput, ListFlowsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListFlowsInput, ListFlowsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
