import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCacheEngineVersions } from "../model/DescribeCacheEngineVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCacheEngineVersionsInput } from "../types/DescribeCacheEngineVersionsInput";
import { DescribeCacheEngineVersionsOutput } from "../types/DescribeCacheEngineVersionsOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DescribeCacheEngineVersionsInput";
export * from "../types/DescribeCacheEngineVersionsOutput";
export * from "../types/DescribeCacheEngineVersionsExceptionsUnion";

export class DescribeCacheEngineVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCacheEngineVersionsInput,
      OutputTypesUnion,
      DescribeCacheEngineVersionsOutput,
      ElastiCacheResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeCacheEngineVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCacheEngineVersionsInput,
    DescribeCacheEngineVersionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeCacheEngineVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCacheEngineVersionsInput,
    DescribeCacheEngineVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeCacheEngineVersionsInput,
        DescribeCacheEngineVersionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
