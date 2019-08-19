import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeStackInstance } from "../model/operations/DescribeStackInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStackInstanceInput } from "../types/DescribeStackInstanceInput";
import { DescribeStackInstanceOutput } from "../types/DescribeStackInstanceOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DescribeStackInstanceInput";
export * from "../types/DescribeStackInstanceOutput";
export * from "../types/DescribeStackInstanceExceptionsUnion";

export class DescribeStackInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStackInstanceInput,
      OutputTypesUnion,
      DescribeStackInstanceOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeStackInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStackInstanceInput,
    DescribeStackInstanceOutput,
    Blob
  >();

  constructor(readonly input: DescribeStackInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStackInstanceInput,
    DescribeStackInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStackInstanceInput, DescribeStackInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
