import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCache } from "../model/DescribeCache";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCacheInput } from "../types/DescribeCacheInput";
import { DescribeCacheOutput } from "../types/DescribeCacheOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeCacheInput";
export * from "../types/DescribeCacheOutput";
export * from "../types/DescribeCacheExceptionsUnion";

export class DescribeCacheCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCacheInput,
      OutputTypesUnion,
      DescribeCacheOutput,
      StorageGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeCache;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCacheInput,
    DescribeCacheOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeCacheInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeCacheInput, DescribeCacheOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCacheInput, DescribeCacheOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
