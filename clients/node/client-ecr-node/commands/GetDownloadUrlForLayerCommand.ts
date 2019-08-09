import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDownloadUrlForLayer } from "../model/GetDownloadUrlForLayer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDownloadUrlForLayerInput } from "../types/GetDownloadUrlForLayerInput";
import { GetDownloadUrlForLayerOutput } from "../types/GetDownloadUrlForLayerOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/GetDownloadUrlForLayerInput";
export * from "../types/GetDownloadUrlForLayerOutput";
export * from "../types/GetDownloadUrlForLayerExceptionsUnion";

export class GetDownloadUrlForLayerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDownloadUrlForLayerInput,
      OutputTypesUnion,
      GetDownloadUrlForLayerOutput,
      ECRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDownloadUrlForLayer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDownloadUrlForLayerInput,
    GetDownloadUrlForLayerOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDownloadUrlForLayerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDownloadUrlForLayerInput,
    GetDownloadUrlForLayerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDownloadUrlForLayerInput, GetDownloadUrlForLayerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
