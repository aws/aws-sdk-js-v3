import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopExecution } from "../model/operations/StopExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopExecutionInput } from "../types/StopExecutionInput";
import { StopExecutionOutput } from "../types/StopExecutionOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/StopExecutionInput";
export * from "../types/StopExecutionOutput";
export * from "../types/StopExecutionExceptionsUnion";

export class StopExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopExecutionInput,
      OutputTypesUnion,
      StopExecutionOutput,
      SFNResolvedConfiguration,
      Blob
    > {
  readonly model = StopExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopExecutionInput,
    StopExecutionOutput,
    Blob
  >();

  constructor(readonly input: StopExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<StopExecutionInput, StopExecutionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopExecutionInput, StopExecutionOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
