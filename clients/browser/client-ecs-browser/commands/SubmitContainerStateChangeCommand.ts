import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SubmitContainerStateChange } from "../model/operations/SubmitContainerStateChange";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SubmitContainerStateChangeInput } from "../types/SubmitContainerStateChangeInput";
import { SubmitContainerStateChangeOutput } from "../types/SubmitContainerStateChangeOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/SubmitContainerStateChangeInput";
export * from "../types/SubmitContainerStateChangeOutput";
export * from "../types/SubmitContainerStateChangeExceptionsUnion";

export class SubmitContainerStateChangeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SubmitContainerStateChangeInput,
      OutputTypesUnion,
      SubmitContainerStateChangeOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = SubmitContainerStateChange;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SubmitContainerStateChangeInput,
    SubmitContainerStateChangeOutput,
    Blob
  >();

  constructor(readonly input: SubmitContainerStateChangeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SubmitContainerStateChangeInput,
    SubmitContainerStateChangeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SubmitContainerStateChangeInput,
        SubmitContainerStateChangeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
