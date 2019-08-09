import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutFunctionConcurrency } from "../model/PutFunctionConcurrency";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutFunctionConcurrencyInput } from "../types/PutFunctionConcurrencyInput";
import { PutFunctionConcurrencyOutput } from "../types/PutFunctionConcurrencyOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/PutFunctionConcurrencyInput";
export * from "../types/PutFunctionConcurrencyOutput";
export * from "../types/PutFunctionConcurrencyExceptionsUnion";

export class PutFunctionConcurrencyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutFunctionConcurrencyInput,
      OutputTypesUnion,
      PutFunctionConcurrencyOutput,
      LambdaResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutFunctionConcurrency;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutFunctionConcurrencyInput,
    PutFunctionConcurrencyOutput,
    Uint8Array
  >();

  constructor(readonly input: PutFunctionConcurrencyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutFunctionConcurrencyInput,
    PutFunctionConcurrencyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutFunctionConcurrencyInput, PutFunctionConcurrencyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
