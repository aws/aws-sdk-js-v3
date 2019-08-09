import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeStackResourceDrifts } from "../model/DescribeStackResourceDrifts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStackResourceDriftsInput } from "../types/DescribeStackResourceDriftsInput";
import { DescribeStackResourceDriftsOutput } from "../types/DescribeStackResourceDriftsOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DescribeStackResourceDriftsInput";
export * from "../types/DescribeStackResourceDriftsOutput";
export * from "../types/DescribeStackResourceDriftsExceptionsUnion";

export class DescribeStackResourceDriftsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStackResourceDriftsInput,
      OutputTypesUnion,
      DescribeStackResourceDriftsOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeStackResourceDrifts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStackResourceDriftsInput,
    DescribeStackResourceDriftsOutput,
    Blob
  >();

  constructor(readonly input: DescribeStackResourceDriftsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStackResourceDriftsInput,
    DescribeStackResourceDriftsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeStackResourceDriftsInput,
        DescribeStackResourceDriftsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
