import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDBParameters } from "../model/operations/DescribeDBParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBParametersInput } from "../types/DescribeDBParametersInput";
import { DescribeDBParametersOutput } from "../types/DescribeDBParametersOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeDBParametersInput";
export * from "../types/DescribeDBParametersOutput";
export * from "../types/DescribeDBParametersExceptionsUnion";

export class DescribeDBParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBParametersInput,
      OutputTypesUnion,
      DescribeDBParametersOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDBParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBParametersInput,
    DescribeDBParametersOutput,
    Blob
  >();

  constructor(readonly input: DescribeDBParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBParametersInput,
    DescribeDBParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDBParametersInput, DescribeDBParametersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
