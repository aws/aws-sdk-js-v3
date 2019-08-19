import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SuspendProcesses } from "../model/operations/SuspendProcesses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SuspendProcessesInput } from "../types/SuspendProcessesInput";
import { SuspendProcessesOutput } from "../types/SuspendProcessesOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/SuspendProcessesInput";
export * from "../types/SuspendProcessesOutput";
export * from "../types/SuspendProcessesExceptionsUnion";

export class SuspendProcessesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SuspendProcessesInput,
      OutputTypesUnion,
      SuspendProcessesOutput,
      AutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = SuspendProcesses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SuspendProcessesInput,
    SuspendProcessesOutput,
    Blob
  >();

  constructor(readonly input: SuspendProcessesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<SuspendProcessesInput, SuspendProcessesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SuspendProcessesInput, SuspendProcessesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
