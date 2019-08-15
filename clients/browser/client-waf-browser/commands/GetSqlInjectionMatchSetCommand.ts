import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSqlInjectionMatchSet } from "../model/operations/GetSqlInjectionMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSqlInjectionMatchSetInput } from "../types/GetSqlInjectionMatchSetInput";
import { GetSqlInjectionMatchSetOutput } from "../types/GetSqlInjectionMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/GetSqlInjectionMatchSetInput";
export * from "../types/GetSqlInjectionMatchSetOutput";
export * from "../types/GetSqlInjectionMatchSetExceptionsUnion";

export class GetSqlInjectionMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSqlInjectionMatchSetInput,
      OutputTypesUnion,
      GetSqlInjectionMatchSetOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = GetSqlInjectionMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSqlInjectionMatchSetInput,
    GetSqlInjectionMatchSetOutput,
    Blob
  >();

  constructor(readonly input: GetSqlInjectionMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSqlInjectionMatchSetInput,
    GetSqlInjectionMatchSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSqlInjectionMatchSetInput, GetSqlInjectionMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
