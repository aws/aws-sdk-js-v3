import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeBroker } from "../model/DescribeBroker";
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
      _stream.Readable
    > {
  readonly model = DescribeBroker;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBrokerInput,
    DescribeBrokerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeBrokerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
