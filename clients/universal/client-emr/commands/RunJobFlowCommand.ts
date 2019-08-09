import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RunJobFlow } from "../model/RunJobFlow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RunJobFlowInput } from "../types/RunJobFlowInput";
import { RunJobFlowOutput } from "../types/RunJobFlowOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/RunJobFlowInput";
export * from "../types/RunJobFlowOutput";
export * from "../types/RunJobFlowExceptionsUnion";

export class RunJobFlowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RunJobFlowInput,
      OutputTypesUnion,
      RunJobFlowOutput,
      EMRResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RunJobFlow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RunJobFlowInput,
    RunJobFlowOutput,
    Uint8Array
  >();

  constructor(readonly input: RunJobFlowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<RunJobFlowInput, RunJobFlowOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RunJobFlowInput, RunJobFlowOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
