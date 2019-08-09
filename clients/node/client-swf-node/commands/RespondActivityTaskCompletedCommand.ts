import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RespondActivityTaskCompleted } from "../model/RespondActivityTaskCompleted";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RespondActivityTaskCompletedInput } from "../types/RespondActivityTaskCompletedInput";
import { RespondActivityTaskCompletedOutput } from "../types/RespondActivityTaskCompletedOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/RespondActivityTaskCompletedInput";
export * from "../types/RespondActivityTaskCompletedOutput";
export * from "../types/RespondActivityTaskCompletedExceptionsUnion";

export class RespondActivityTaskCompletedCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RespondActivityTaskCompletedInput,
      OutputTypesUnion,
      RespondActivityTaskCompletedOutput,
      SWFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RespondActivityTaskCompleted;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RespondActivityTaskCompletedInput,
    RespondActivityTaskCompletedOutput,
    _stream.Readable
  >();

  constructor(readonly input: RespondActivityTaskCompletedInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RespondActivityTaskCompletedInput,
    RespondActivityTaskCompletedOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RespondActivityTaskCompletedInput,
        RespondActivityTaskCompletedOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
