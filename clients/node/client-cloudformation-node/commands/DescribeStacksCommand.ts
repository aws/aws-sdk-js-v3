import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeStacks } from "../model/operations/DescribeStacks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStacksInput } from "../types/DescribeStacksInput";
import { DescribeStacksOutput } from "../types/DescribeStacksOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DescribeStacksInput";
export * from "../types/DescribeStacksOutput";
export * from "../types/DescribeStacksExceptionsUnion";

export class DescribeStacksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStacksInput,
      OutputTypesUnion,
      DescribeStacksOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeStacks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStacksInput,
    DescribeStacksOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeStacksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeStacksInput, DescribeStacksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStacksInput, DescribeStacksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
