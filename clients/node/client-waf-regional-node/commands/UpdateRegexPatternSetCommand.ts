import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateRegexPatternSet } from "../model/operations/UpdateRegexPatternSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRegexPatternSetInput } from "../types/UpdateRegexPatternSetInput";
import { UpdateRegexPatternSetOutput } from "../types/UpdateRegexPatternSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
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
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateRegexPatternSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRegexPatternSetInput,
    UpdateRegexPatternSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateRegexPatternSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
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
