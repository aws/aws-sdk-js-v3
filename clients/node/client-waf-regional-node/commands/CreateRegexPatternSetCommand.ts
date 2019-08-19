import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateRegexPatternSet } from "../model/operations/CreateRegexPatternSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRegexPatternSetInput } from "../types/CreateRegexPatternSetInput";
import { CreateRegexPatternSetOutput } from "../types/CreateRegexPatternSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/CreateRegexPatternSetInput";
export * from "../types/CreateRegexPatternSetOutput";
export * from "../types/CreateRegexPatternSetExceptionsUnion";

export class CreateRegexPatternSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRegexPatternSetInput,
      OutputTypesUnion,
      CreateRegexPatternSetOutput,
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateRegexPatternSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRegexPatternSetInput,
    CreateRegexPatternSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateRegexPatternSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateRegexPatternSetInput,
    CreateRegexPatternSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRegexPatternSetInput, CreateRegexPatternSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
