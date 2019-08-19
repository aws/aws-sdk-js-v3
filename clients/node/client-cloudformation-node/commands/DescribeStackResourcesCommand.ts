import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeStackResources } from "../model/operations/DescribeStackResources";
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
      _stream.Readable
    > {
  readonly model = DescribeStackResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStackResourcesInput,
    DescribeStackResourcesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeStackResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
