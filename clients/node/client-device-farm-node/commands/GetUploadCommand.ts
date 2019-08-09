import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetUpload } from "../model/GetUpload";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUploadInput } from "../types/GetUploadInput";
import { GetUploadOutput } from "../types/GetUploadOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/GetUploadInput";
export * from "../types/GetUploadOutput";
export * from "../types/GetUploadExceptionsUnion";

export class GetUploadCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUploadInput,
      OutputTypesUnion,
      GetUploadOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetUpload;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUploadInput,
    GetUploadOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetUploadInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUploadInput, GetUploadOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUploadInput, GetUploadOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
