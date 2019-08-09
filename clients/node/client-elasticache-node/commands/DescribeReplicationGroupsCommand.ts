import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeReplicationGroups } from "../model/DescribeReplicationGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReplicationGroupsInput } from "../types/DescribeReplicationGroupsInput";
import { DescribeReplicationGroupsOutput } from "../types/DescribeReplicationGroupsOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DescribeReplicationGroupsInput";
export * from "../types/DescribeReplicationGroupsOutput";
export * from "../types/DescribeReplicationGroupsExceptionsUnion";

export class DescribeReplicationGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReplicationGroupsInput,
      OutputTypesUnion,
      DescribeReplicationGroupsOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeReplicationGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReplicationGroupsInput,
    DescribeReplicationGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeReplicationGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReplicationGroupsInput,
    DescribeReplicationGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeReplicationGroupsInput, DescribeReplicationGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
