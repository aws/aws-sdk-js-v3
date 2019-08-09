import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopRun } from "../model/StopRun";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopRunInput } from "../types/StopRunInput";
import { StopRunOutput } from "../types/StopRunOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/StopRunInput";
export * from "../types/StopRunOutput";
export * from "../types/StopRunExceptionsUnion";

export class StopRunCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopRunInput,
      OutputTypesUnion,
      StopRunOutput,
      DeviceFarmResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StopRun;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopRunInput,
    StopRunOutput,
    Uint8Array
  >();

  constructor(readonly input: StopRunInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<StopRunInput, StopRunOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopRunInput, StopRunOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
