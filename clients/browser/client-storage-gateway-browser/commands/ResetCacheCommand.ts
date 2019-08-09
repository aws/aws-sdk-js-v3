import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ResetCache } from "../model/ResetCache";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetCacheInput } from "../types/ResetCacheInput";
import { ResetCacheOutput } from "../types/ResetCacheOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/ResetCacheInput";
export * from "../types/ResetCacheOutput";
export * from "../types/ResetCacheExceptionsUnion";

export class ResetCacheCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetCacheInput,
      OutputTypesUnion,
      ResetCacheOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = ResetCache;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetCacheInput,
    ResetCacheOutput,
    Blob
  >();

  constructor(readonly input: ResetCacheInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<ResetCacheInput, ResetCacheOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetCacheInput, ResetCacheOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
