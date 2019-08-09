import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSqlInjectionMatchSet } from "../model/DeleteSqlInjectionMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSqlInjectionMatchSetInput } from "../types/DeleteSqlInjectionMatchSetInput";
import { DeleteSqlInjectionMatchSetOutput } from "../types/DeleteSqlInjectionMatchSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/DeleteSqlInjectionMatchSetInput";
export * from "../types/DeleteSqlInjectionMatchSetOutput";
export * from "../types/DeleteSqlInjectionMatchSetExceptionsUnion";

export class DeleteSqlInjectionMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSqlInjectionMatchSetInput,
      OutputTypesUnion,
      DeleteSqlInjectionMatchSetOutput,
      WAFRegionalResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteSqlInjectionMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSqlInjectionMatchSetInput,
    DeleteSqlInjectionMatchSetOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteSqlInjectionMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSqlInjectionMatchSetInput,
    DeleteSqlInjectionMatchSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteSqlInjectionMatchSetInput,
        DeleteSqlInjectionMatchSetOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
