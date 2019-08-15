import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopFlow } from "../model/operations/StopFlow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopFlowInput } from "../types/StopFlowInput";
import { StopFlowOutput } from "../types/StopFlowOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/StopFlowInput";
export * from "../types/StopFlowOutput";
export * from "../types/StopFlowExceptionsUnion";

export class StopFlowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopFlowInput,
      OutputTypesUnion,
      StopFlowOutput,
      MediaConnectResolvedConfiguration,
      Blob
    > {
  readonly model = StopFlow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopFlowInput,
    StopFlowOutput,
    Blob
  >();

  constructor(readonly input: StopFlowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<StopFlowInput, StopFlowOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopFlowInput, StopFlowOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
