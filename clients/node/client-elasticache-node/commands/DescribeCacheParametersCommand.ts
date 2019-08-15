import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCacheParameters } from "../model/operations/DescribeCacheParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCacheParametersInput } from "../types/DescribeCacheParametersInput";
import { DescribeCacheParametersOutput } from "../types/DescribeCacheParametersOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DescribeCacheParametersInput";
export * from "../types/DescribeCacheParametersOutput";
export * from "../types/DescribeCacheParametersExceptionsUnion";

export class DescribeCacheParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCacheParametersInput,
      OutputTypesUnion,
      DescribeCacheParametersOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCacheParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCacheParametersInput,
    DescribeCacheParametersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCacheParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCacheParametersInput,
    DescribeCacheParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCacheParametersInput, DescribeCacheParametersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
