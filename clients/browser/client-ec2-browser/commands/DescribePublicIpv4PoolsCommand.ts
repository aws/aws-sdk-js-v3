import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribePublicIpv4Pools } from "../model/DescribePublicIpv4Pools";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePublicIpv4PoolsInput } from "../types/DescribePublicIpv4PoolsInput";
import { DescribePublicIpv4PoolsOutput } from "../types/DescribePublicIpv4PoolsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribePublicIpv4PoolsInput";
export * from "../types/DescribePublicIpv4PoolsOutput";
export * from "../types/DescribePublicIpv4PoolsExceptionsUnion";

export class DescribePublicIpv4PoolsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePublicIpv4PoolsInput,
      OutputTypesUnion,
      DescribePublicIpv4PoolsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribePublicIpv4Pools;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePublicIpv4PoolsInput,
    DescribePublicIpv4PoolsOutput,
    Blob
  >();

  constructor(readonly input: DescribePublicIpv4PoolsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePublicIpv4PoolsInput,
    DescribePublicIpv4PoolsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePublicIpv4PoolsInput, DescribePublicIpv4PoolsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
