import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateRegexMatchSet } from "../model/operations/CreateRegexMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRegexMatchSetInput } from "../types/CreateRegexMatchSetInput";
import { CreateRegexMatchSetOutput } from "../types/CreateRegexMatchSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/CreateRegexMatchSetInput";
export * from "../types/CreateRegexMatchSetOutput";
export * from "../types/CreateRegexMatchSetExceptionsUnion";

export class CreateRegexMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRegexMatchSetInput,
      OutputTypesUnion,
      CreateRegexMatchSetOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = CreateRegexMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRegexMatchSetInput,
    CreateRegexMatchSetOutput,
    Blob
  >();

  constructor(readonly input: CreateRegexMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateRegexMatchSetInput,
    CreateRegexMatchSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRegexMatchSetInput, CreateRegexMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
