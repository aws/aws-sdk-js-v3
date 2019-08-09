import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TerminateJobFlows } from "../model/TerminateJobFlows";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TerminateJobFlowsInput } from "../types/TerminateJobFlowsInput";
import { TerminateJobFlowsOutput } from "../types/TerminateJobFlowsOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/TerminateJobFlowsInput";
export * from "../types/TerminateJobFlowsOutput";
export * from "../types/TerminateJobFlowsExceptionsUnion";

export class TerminateJobFlowsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TerminateJobFlowsInput,
      OutputTypesUnion,
      TerminateJobFlowsOutput,
      EMRResolvedConfiguration,
      Uint8Array
    > {
  readonly model = TerminateJobFlows;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TerminateJobFlowsInput,
    TerminateJobFlowsOutput,
    Uint8Array
  >();

  constructor(readonly input: TerminateJobFlowsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<TerminateJobFlowsInput, TerminateJobFlowsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TerminateJobFlowsInput, TerminateJobFlowsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
