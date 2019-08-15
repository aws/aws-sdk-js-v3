import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeBroker } from "../model/operations/DescribeBroker";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBrokerInput } from "../types/DescribeBrokerInput";
import { DescribeBrokerOutput } from "../types/DescribeBrokerOutput";
import { mqResolvedConfiguration } from "../mqConfiguration";
export * from "../types/DescribeBrokerInput";
export * from "../types/DescribeBrokerOutput";
export * from "../types/DescribeBrokerExceptionsUnion";

export class DescribeBrokerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBrokerInput,
      OutputTypesUnion,
      DescribeBrokerOutput,
      mqResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeBroker;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBrokerInput,
    DescribeBrokerOutput,
    Blob
  >();

  constructor(readonly input: DescribeBrokerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: mqResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeBrokerInput, DescribeBrokerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeBrokerInput, DescribeBrokerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
