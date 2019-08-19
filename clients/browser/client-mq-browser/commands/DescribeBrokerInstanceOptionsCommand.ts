import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeBrokerInstanceOptions } from "../model/operations/DescribeBrokerInstanceOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBrokerInstanceOptionsInput } from "../types/DescribeBrokerInstanceOptionsInput";
import { DescribeBrokerInstanceOptionsOutput } from "../types/DescribeBrokerInstanceOptionsOutput";
import { mqResolvedConfiguration } from "../mqConfiguration";
export * from "../types/DescribeBrokerInstanceOptionsInput";
export * from "../types/DescribeBrokerInstanceOptionsOutput";
export * from "../types/DescribeBrokerInstanceOptionsExceptionsUnion";

export class DescribeBrokerInstanceOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBrokerInstanceOptionsInput,
      OutputTypesUnion,
      DescribeBrokerInstanceOptionsOutput,
      mqResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeBrokerInstanceOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBrokerInstanceOptionsInput,
    DescribeBrokerInstanceOptionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeBrokerInstanceOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: mqResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeBrokerInstanceOptionsInput,
    DescribeBrokerInstanceOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeBrokerInstanceOptionsInput,
        DescribeBrokerInstanceOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
