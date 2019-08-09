import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeBrokerEngineTypes } from "../model/DescribeBrokerEngineTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBrokerEngineTypesInput } from "../types/DescribeBrokerEngineTypesInput";
import { DescribeBrokerEngineTypesOutput } from "../types/DescribeBrokerEngineTypesOutput";
import { mqResolvedConfiguration } from "../mqConfiguration";
export * from "../types/DescribeBrokerEngineTypesInput";
export * from "../types/DescribeBrokerEngineTypesOutput";
export * from "../types/DescribeBrokerEngineTypesExceptionsUnion";

export class DescribeBrokerEngineTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBrokerEngineTypesInput,
      OutputTypesUnion,
      DescribeBrokerEngineTypesOutput,
      mqResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeBrokerEngineTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBrokerEngineTypesInput,
    DescribeBrokerEngineTypesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeBrokerEngineTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: mqResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeBrokerEngineTypesInput,
    DescribeBrokerEngineTypesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeBrokerEngineTypesInput, DescribeBrokerEngineTypesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
