import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RespondActivityTaskFailed } from "../model/RespondActivityTaskFailed";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RespondActivityTaskFailedInput } from "../types/RespondActivityTaskFailedInput";
import { RespondActivityTaskFailedOutput } from "../types/RespondActivityTaskFailedOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/RespondActivityTaskFailedInput";
export * from "../types/RespondActivityTaskFailedOutput";
export * from "../types/RespondActivityTaskFailedExceptionsUnion";

export class RespondActivityTaskFailedCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RespondActivityTaskFailedInput,
      OutputTypesUnion,
      RespondActivityTaskFailedOutput,
      SWFResolvedConfiguration,
      Blob
    > {
  readonly model = RespondActivityTaskFailed;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RespondActivityTaskFailedInput,
    RespondActivityTaskFailedOutput,
    Blob
  >();

  constructor(readonly input: RespondActivityTaskFailedInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RespondActivityTaskFailedInput,
    RespondActivityTaskFailedOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RespondActivityTaskFailedInput, RespondActivityTaskFailedOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
