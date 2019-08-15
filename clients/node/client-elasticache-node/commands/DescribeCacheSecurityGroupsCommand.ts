import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCacheSecurityGroups } from "../model/operations/DescribeCacheSecurityGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCacheSecurityGroupsInput } from "../types/DescribeCacheSecurityGroupsInput";
import { DescribeCacheSecurityGroupsOutput } from "../types/DescribeCacheSecurityGroupsOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DescribeCacheSecurityGroupsInput";
export * from "../types/DescribeCacheSecurityGroupsOutput";
export * from "../types/DescribeCacheSecurityGroupsExceptionsUnion";

export class DescribeCacheSecurityGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCacheSecurityGroupsInput,
      OutputTypesUnion,
      DescribeCacheSecurityGroupsOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCacheSecurityGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCacheSecurityGroupsInput,
    DescribeCacheSecurityGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCacheSecurityGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCacheSecurityGroupsInput,
    DescribeCacheSecurityGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeCacheSecurityGroupsInput,
        DescribeCacheSecurityGroupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
