import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateXssMatchSet } from "../model/operations/CreateXssMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateXssMatchSetInput } from "../types/CreateXssMatchSetInput";
import { CreateXssMatchSetOutput } from "../types/CreateXssMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/CreateXssMatchSetInput";
export * from "../types/CreateXssMatchSetOutput";
export * from "../types/CreateXssMatchSetExceptionsUnion";

export class CreateXssMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateXssMatchSetInput,
      OutputTypesUnion,
      CreateXssMatchSetOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = CreateXssMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateXssMatchSetInput,
    CreateXssMatchSetOutput,
    Blob
  >();

  constructor(readonly input: CreateXssMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateXssMatchSetInput, CreateXssMatchSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateXssMatchSetInput, CreateXssMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
