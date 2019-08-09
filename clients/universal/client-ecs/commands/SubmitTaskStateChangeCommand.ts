import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SubmitTaskStateChange } from "../model/SubmitTaskStateChange";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SubmitTaskStateChangeInput } from "../types/SubmitTaskStateChangeInput";
import { SubmitTaskStateChangeOutput } from "../types/SubmitTaskStateChangeOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/SubmitTaskStateChangeInput";
export * from "../types/SubmitTaskStateChangeOutput";
export * from "../types/SubmitTaskStateChangeExceptionsUnion";

export class SubmitTaskStateChangeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SubmitTaskStateChangeInput,
      OutputTypesUnion,
      SubmitTaskStateChangeOutput,
      ECSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SubmitTaskStateChange;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SubmitTaskStateChangeInput,
    SubmitTaskStateChangeOutput,
    Uint8Array
  >();

  constructor(readonly input: SubmitTaskStateChangeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SubmitTaskStateChangeInput,
    SubmitTaskStateChangeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SubmitTaskStateChangeInput, SubmitTaskStateChangeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
