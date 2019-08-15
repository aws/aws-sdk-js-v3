import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeChangeSet } from "../model/operations/DescribeChangeSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeChangeSetInput } from "../types/DescribeChangeSetInput";
import { DescribeChangeSetOutput } from "../types/DescribeChangeSetOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DescribeChangeSetInput";
export * from "../types/DescribeChangeSetOutput";
export * from "../types/DescribeChangeSetExceptionsUnion";

export class DescribeChangeSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeChangeSetInput,
      OutputTypesUnion,
      DescribeChangeSetOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeChangeSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeChangeSetInput,
    DescribeChangeSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeChangeSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeChangeSetInput, DescribeChangeSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeChangeSetInput, DescribeChangeSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
