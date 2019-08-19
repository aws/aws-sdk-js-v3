import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeJob } from "../model/operations/DescribeJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeJobInput } from "../types/DescribeJobInput";
import { DescribeJobOutput } from "../types/DescribeJobOutput";
import { S3ControlResolvedConfiguration } from "../S3ControlConfiguration";
export * from "../types/DescribeJobInput";
export * from "../types/DescribeJobOutput";
export * from "../types/DescribeJobExceptionsUnion";

export class DescribeJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeJobInput,
      OutputTypesUnion,
      DescribeJobOutput,
      S3ControlResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeJobInput,
    DescribeJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ControlResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeJobInput, DescribeJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeJobInput, DescribeJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
