import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeHosts } from "../model/DescribeHosts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeHostsInput } from "../types/DescribeHostsInput";
import { DescribeHostsOutput } from "../types/DescribeHostsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeHostsInput";
export * from "../types/DescribeHostsOutput";
export * from "../types/DescribeHostsExceptionsUnion";

export class DescribeHostsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeHostsInput,
      OutputTypesUnion,
      DescribeHostsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeHosts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeHostsInput,
    DescribeHostsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeHostsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeHostsInput, DescribeHostsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeHostsInput, DescribeHostsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
