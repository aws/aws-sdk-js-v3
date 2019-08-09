import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCacheSubnetGroups } from "../model/DescribeCacheSubnetGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCacheSubnetGroupsInput } from "../types/DescribeCacheSubnetGroupsInput";
import { DescribeCacheSubnetGroupsOutput } from "../types/DescribeCacheSubnetGroupsOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DescribeCacheSubnetGroupsInput";
export * from "../types/DescribeCacheSubnetGroupsOutput";
export * from "../types/DescribeCacheSubnetGroupsExceptionsUnion";

export class DescribeCacheSubnetGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCacheSubnetGroupsInput,
      OutputTypesUnion,
      DescribeCacheSubnetGroupsOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeCacheSubnetGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCacheSubnetGroupsInput,
    DescribeCacheSubnetGroupsOutput,
    Blob
  >();

  constructor(readonly input: DescribeCacheSubnetGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCacheSubnetGroupsInput,
    DescribeCacheSubnetGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCacheSubnetGroupsInput, DescribeCacheSubnetGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
