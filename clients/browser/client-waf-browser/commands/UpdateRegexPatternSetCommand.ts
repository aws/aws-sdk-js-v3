import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRegexPatternSet } from "../model/UpdateRegexPatternSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRegexPatternSetInput } from "../types/UpdateRegexPatternSetInput";
import { UpdateRegexPatternSetOutput } from "../types/UpdateRegexPatternSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/UpdateRegexPatternSetInput";
export * from "../types/UpdateRegexPatternSetOutput";
export * from "../types/UpdateRegexPatternSetExceptionsUnion";

export class UpdateRegexPatternSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRegexPatternSetInput,
      OutputTypesUnion,
      UpdateRegexPatternSetOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateRegexPatternSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRegexPatternSetInput,
    UpdateRegexPatternSetOutput,
    Blob
  >();

  constructor(readonly input: UpdateRegexPatternSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRegexPatternSetInput,
    UpdateRegexPatternSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRegexPatternSetInput, UpdateRegexPatternSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
