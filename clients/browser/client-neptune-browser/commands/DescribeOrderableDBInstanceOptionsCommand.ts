import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeOrderableDBInstanceOptions } from "../model/DescribeOrderableDBInstanceOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeOrderableDBInstanceOptionsInput } from "../types/DescribeOrderableDBInstanceOptionsInput";
import { DescribeOrderableDBInstanceOptionsOutput } from "../types/DescribeOrderableDBInstanceOptionsOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/DescribeOrderableDBInstanceOptionsInput";
export * from "../types/DescribeOrderableDBInstanceOptionsOutput";
export * from "../types/DescribeOrderableDBInstanceOptionsExceptionsUnion";

export class DescribeOrderableDBInstanceOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeOrderableDBInstanceOptionsInput,
      OutputTypesUnion,
      DescribeOrderableDBInstanceOptionsOutput,
      NeptuneResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeOrderableDBInstanceOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeOrderableDBInstanceOptionsInput,
    DescribeOrderableDBInstanceOptionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeOrderableDBInstanceOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeOrderableDBInstanceOptionsInput,
    DescribeOrderableDBInstanceOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeOrderableDBInstanceOptionsInput,
        DescribeOrderableDBInstanceOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
