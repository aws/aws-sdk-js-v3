import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { InitiateLayerUpload } from "../model/InitiateLayerUpload";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { InitiateLayerUploadInput } from "../types/InitiateLayerUploadInput";
import { InitiateLayerUploadOutput } from "../types/InitiateLayerUploadOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/InitiateLayerUploadInput";
export * from "../types/InitiateLayerUploadOutput";
export * from "../types/InitiateLayerUploadExceptionsUnion";

export class InitiateLayerUploadCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      InitiateLayerUploadInput,
      OutputTypesUnion,
      InitiateLayerUploadOutput,
      ECRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = InitiateLayerUpload;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InitiateLayerUploadInput,
    InitiateLayerUploadOutput,
    _stream.Readable
  >();

  constructor(readonly input: InitiateLayerUploadInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    InitiateLayerUploadInput,
    InitiateLayerUploadOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<InitiateLayerUploadInput, InitiateLayerUploadOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
