import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateSqlInjectionMatchSet } from "../model/UpdateSqlInjectionMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSqlInjectionMatchSetInput } from "../types/UpdateSqlInjectionMatchSetInput";
import { UpdateSqlInjectionMatchSetOutput } from "../types/UpdateSqlInjectionMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/UpdateSqlInjectionMatchSetInput";
export * from "../types/UpdateSqlInjectionMatchSetOutput";
export * from "../types/UpdateSqlInjectionMatchSetExceptionsUnion";

export class UpdateSqlInjectionMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSqlInjectionMatchSetInput,
      OutputTypesUnion,
      UpdateSqlInjectionMatchSetOutput,
      WAFResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateSqlInjectionMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSqlInjectionMatchSetInput,
    UpdateSqlInjectionMatchSetOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateSqlInjectionMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSqlInjectionMatchSetInput,
    UpdateSqlInjectionMatchSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateSqlInjectionMatchSetInput,
        UpdateSqlInjectionMatchSetOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
