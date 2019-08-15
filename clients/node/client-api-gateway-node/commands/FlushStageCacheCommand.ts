import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { FlushStageCache } from "../model/operations/FlushStageCache";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { FlushStageCacheInput } from "../types/FlushStageCacheInput";
import { FlushStageCacheOutput } from "../types/FlushStageCacheOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/FlushStageCacheInput";
export * from "../types/FlushStageCacheOutput";
export * from "../types/FlushStageCacheExceptionsUnion";

export class FlushStageCacheCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      FlushStageCacheInput,
      OutputTypesUnion,
      FlushStageCacheOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = FlushStageCache;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    FlushStageCacheInput,
    FlushStageCacheOutput,
    _stream.Readable
  >();

  constructor(readonly input: FlushStageCacheInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<FlushStageCacheInput, FlushStageCacheOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<FlushStageCacheInput, FlushStageCacheOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
