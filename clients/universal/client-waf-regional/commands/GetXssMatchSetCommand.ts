import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetXssMatchSet } from "../model/GetXssMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetXssMatchSetInput } from "../types/GetXssMatchSetInput";
import { GetXssMatchSetOutput } from "../types/GetXssMatchSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/GetXssMatchSetInput";
export * from "../types/GetXssMatchSetOutput";
export * from "../types/GetXssMatchSetExceptionsUnion";

export class GetXssMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetXssMatchSetInput,
      OutputTypesUnion,
      GetXssMatchSetOutput,
      WAFRegionalResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetXssMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetXssMatchSetInput,
    GetXssMatchSetOutput,
    Uint8Array
  >();

  constructor(readonly input: GetXssMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<GetXssMatchSetInput, GetXssMatchSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetXssMatchSetInput, GetXssMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
