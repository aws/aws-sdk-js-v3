import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeStackResources } from "../model/DescribeStackResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStackResourcesInput } from "../types/DescribeStackResourcesInput";
import { DescribeStackResourcesOutput } from "../types/DescribeStackResourcesOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DescribeStackResourcesInput";
export * from "../types/DescribeStackResourcesOutput";
export * from "../types/DescribeStackResourcesExceptionsUnion";

export class DescribeStackResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStackResourcesInput,
      OutputTypesUnion,
      DescribeStackResourcesOutput,
      CloudFormationResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeStackResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStackResourcesInput,
    DescribeStackResourcesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeStackResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStackResourcesInput,
    DescribeStackResourcesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStackResourcesInput, DescribeStackResourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
