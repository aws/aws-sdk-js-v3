import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetLayerVersion } from "../model/GetLayerVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLayerVersionInput } from "../types/GetLayerVersionInput";
import { GetLayerVersionOutput } from "../types/GetLayerVersionOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/GetLayerVersionInput";
export * from "../types/GetLayerVersionOutput";
export * from "../types/GetLayerVersionExceptionsUnion";

export class GetLayerVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLayerVersionInput,
      OutputTypesUnion,
      GetLayerVersionOutput,
      LambdaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetLayerVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLayerVersionInput,
    GetLayerVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetLayerVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<GetLayerVersionInput, GetLayerVersionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLayerVersionInput, GetLayerVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
