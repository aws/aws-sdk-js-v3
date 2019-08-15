import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSqlInjectionMatchSet } from "../model/operations/CreateSqlInjectionMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSqlInjectionMatchSetInput } from "../types/CreateSqlInjectionMatchSetInput";
import { CreateSqlInjectionMatchSetOutput } from "../types/CreateSqlInjectionMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/CreateSqlInjectionMatchSetInput";
export * from "../types/CreateSqlInjectionMatchSetOutput";
export * from "../types/CreateSqlInjectionMatchSetExceptionsUnion";

export class CreateSqlInjectionMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSqlInjectionMatchSetInput,
      OutputTypesUnion,
      CreateSqlInjectionMatchSetOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = CreateSqlInjectionMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSqlInjectionMatchSetInput,
    CreateSqlInjectionMatchSetOutput,
    Blob
  >();

  constructor(readonly input: CreateSqlInjectionMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSqlInjectionMatchSetInput,
    CreateSqlInjectionMatchSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateSqlInjectionMatchSetInput,
        CreateSqlInjectionMatchSetOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
