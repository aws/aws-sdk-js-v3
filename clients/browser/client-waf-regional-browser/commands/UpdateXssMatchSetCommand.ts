import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateXssMatchSet } from "../model/operations/UpdateXssMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateXssMatchSetInput } from "../types/UpdateXssMatchSetInput";
import { UpdateXssMatchSetOutput } from "../types/UpdateXssMatchSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/UpdateXssMatchSetInput";
export * from "../types/UpdateXssMatchSetOutput";
export * from "../types/UpdateXssMatchSetExceptionsUnion";

export class UpdateXssMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateXssMatchSetInput,
      OutputTypesUnion,
      UpdateXssMatchSetOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateXssMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateXssMatchSetInput,
    UpdateXssMatchSetOutput,
    Blob
  >();

  constructor(readonly input: UpdateXssMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateXssMatchSetInput, UpdateXssMatchSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateXssMatchSetInput, UpdateXssMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
