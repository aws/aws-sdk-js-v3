import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { LabelParameterVersion } from "../model/LabelParameterVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { LabelParameterVersionInput } from "../types/LabelParameterVersionInput";
import { LabelParameterVersionOutput } from "../types/LabelParameterVersionOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/LabelParameterVersionInput";
export * from "../types/LabelParameterVersionOutput";
export * from "../types/LabelParameterVersionExceptionsUnion";

export class LabelParameterVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      LabelParameterVersionInput,
      OutputTypesUnion,
      LabelParameterVersionOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = LabelParameterVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    LabelParameterVersionInput,
    LabelParameterVersionOutput,
    Blob
  >();

  constructor(readonly input: LabelParameterVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    LabelParameterVersionInput,
    LabelParameterVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<LabelParameterVersionInput, LabelParameterVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
