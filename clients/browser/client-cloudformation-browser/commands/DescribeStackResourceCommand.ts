import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeStackResource } from "../model/operations/DescribeStackResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStackResourceInput } from "../types/DescribeStackResourceInput";
import { DescribeStackResourceOutput } from "../types/DescribeStackResourceOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DescribeStackResourceInput";
export * from "../types/DescribeStackResourceOutput";
export * from "../types/DescribeStackResourceExceptionsUnion";

export class DescribeStackResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStackResourceInput,
      OutputTypesUnion,
      DescribeStackResourceOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeStackResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStackResourceInput,
    DescribeStackResourceOutput,
    Blob
  >();

  constructor(readonly input: DescribeStackResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStackResourceInput,
    DescribeStackResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStackResourceInput, DescribeStackResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
