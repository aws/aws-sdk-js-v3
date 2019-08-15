import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { FlushStageAuthorizersCache } from "../model/operations/FlushStageAuthorizersCache";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { FlushStageAuthorizersCacheInput } from "../types/FlushStageAuthorizersCacheInput";
import { FlushStageAuthorizersCacheOutput } from "../types/FlushStageAuthorizersCacheOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/FlushStageAuthorizersCacheInput";
export * from "../types/FlushStageAuthorizersCacheOutput";
export * from "../types/FlushStageAuthorizersCacheExceptionsUnion";

export class FlushStageAuthorizersCacheCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      FlushStageAuthorizersCacheInput,
      OutputTypesUnion,
      FlushStageAuthorizersCacheOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = FlushStageAuthorizersCache;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    FlushStageAuthorizersCacheInput,
    FlushStageAuthorizersCacheOutput,
    _stream.Readable
  >();

  constructor(readonly input: FlushStageAuthorizersCacheInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    FlushStageAuthorizersCacheInput,
    FlushStageAuthorizersCacheOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        FlushStageAuthorizersCacheInput,
        FlushStageAuthorizersCacheOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
