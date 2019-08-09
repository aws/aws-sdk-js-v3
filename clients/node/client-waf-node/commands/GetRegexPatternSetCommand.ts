import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRegexPatternSet } from "../model/GetRegexPatternSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRegexPatternSetInput } from "../types/GetRegexPatternSetInput";
import { GetRegexPatternSetOutput } from "../types/GetRegexPatternSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/GetRegexPatternSetInput";
export * from "../types/GetRegexPatternSetOutput";
export * from "../types/GetRegexPatternSetExceptionsUnion";

export class GetRegexPatternSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRegexPatternSetInput,
      OutputTypesUnion,
      GetRegexPatternSetOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRegexPatternSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRegexPatternSetInput,
    GetRegexPatternSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRegexPatternSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRegexPatternSetInput,
    GetRegexPatternSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRegexPatternSetInput, GetRegexPatternSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
