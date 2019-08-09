import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PollForActivityTask } from "../model/PollForActivityTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PollForActivityTaskInput } from "../types/PollForActivityTaskInput";
import { PollForActivityTaskOutput } from "../types/PollForActivityTaskOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/PollForActivityTaskInput";
export * from "../types/PollForActivityTaskOutput";
export * from "../types/PollForActivityTaskExceptionsUnion";

export class PollForActivityTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PollForActivityTaskInput,
      OutputTypesUnion,
      PollForActivityTaskOutput,
      SWFResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PollForActivityTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PollForActivityTaskInput,
    PollForActivityTaskOutput,
    Uint8Array
  >();

  constructor(readonly input: PollForActivityTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PollForActivityTaskInput,
    PollForActivityTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PollForActivityTaskInput, PollForActivityTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
