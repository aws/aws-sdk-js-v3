import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeOrderableClusterOptions } from "../model/DescribeOrderableClusterOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeOrderableClusterOptionsInput } from "../types/DescribeOrderableClusterOptionsInput";
import { DescribeOrderableClusterOptionsOutput } from "../types/DescribeOrderableClusterOptionsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeOrderableClusterOptionsInput";
export * from "../types/DescribeOrderableClusterOptionsOutput";
export * from "../types/DescribeOrderableClusterOptionsExceptionsUnion";

export class DescribeOrderableClusterOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeOrderableClusterOptionsInput,
      OutputTypesUnion,
      DescribeOrderableClusterOptionsOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeOrderableClusterOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeOrderableClusterOptionsInput,
    DescribeOrderableClusterOptionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeOrderableClusterOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeOrderableClusterOptionsInput,
    DescribeOrderableClusterOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeOrderableClusterOptionsInput,
        DescribeOrderableClusterOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
