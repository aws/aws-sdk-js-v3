import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = DescribeBrokerEngineTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBrokerEngineTypesInput,
    DescribeBrokerEngineTypesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeBrokerEngineTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
