import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DefineExpression } from "../model/DefineExpression";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DefineExpressionInput } from "../types/DefineExpressionInput";
import { DefineExpressionOutput } from "../types/DefineExpressionOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DefineExpressionInput";
export * from "../types/DefineExpressionOutput";
export * from "../types/DefineExpressionExceptionsUnion";

export class DefineExpressionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DefineExpressionInput,
      OutputTypesUnion,
      DefineExpressionOutput,
      CloudSearchResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DefineExpression;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DefineExpressionInput,
    DefineExpressionOutput,
    Uint8Array
  >();

  constructor(readonly input: DefineExpressionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<DefineExpressionInput, DefineExpressionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DefineExpressionInput, DefineExpressionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
