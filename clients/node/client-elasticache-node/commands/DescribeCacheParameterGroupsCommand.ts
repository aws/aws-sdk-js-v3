import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCacheParameterGroups } from "../model/DescribeCacheParameterGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCacheParameterGroupsInput } from "../types/DescribeCacheParameterGroupsInput";
import { DescribeCacheParameterGroupsOutput } from "../types/DescribeCacheParameterGroupsOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DescribeCacheParameterGroupsInput";
export * from "../types/DescribeCacheParameterGroupsOutput";
export * from "../types/DescribeCacheParameterGroupsExceptionsUnion";

export class DescribeCacheParameterGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCacheParameterGroupsInput,
      OutputTypesUnion,
      DescribeCacheParameterGroupsOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCacheParameterGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCacheParameterGroupsInput,
    DescribeCacheParameterGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCacheParameterGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCacheParameterGroupsInput,
    DescribeCacheParameterGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeCacheParameterGroupsInput,
        DescribeCacheParameterGroupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
