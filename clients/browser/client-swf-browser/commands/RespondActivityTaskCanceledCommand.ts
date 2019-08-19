import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RespondActivityTaskCanceled } from "../model/operations/RespondActivityTaskCanceled";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RespondActivityTaskCanceledInput } from "../types/RespondActivityTaskCanceledInput";
import { RespondActivityTaskCanceledOutput } from "../types/RespondActivityTaskCanceledOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/RespondActivityTaskCanceledInput";
export * from "../types/RespondActivityTaskCanceledOutput";
export * from "../types/RespondActivityTaskCanceledExceptionsUnion";

export class RespondActivityTaskCanceledCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RespondActivityTaskCanceledInput,
      OutputTypesUnion,
      RespondActivityTaskCanceledOutput,
      SWFResolvedConfiguration,
      Blob
    > {
  readonly model = RespondActivityTaskCanceled;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RespondActivityTaskCanceledInput,
    RespondActivityTaskCanceledOutput,
    Blob
  >();

  constructor(readonly input: RespondActivityTaskCanceledInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RespondActivityTaskCanceledInput,
    RespondActivityTaskCanceledOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RespondActivityTaskCanceledInput,
        RespondActivityTaskCanceledOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
