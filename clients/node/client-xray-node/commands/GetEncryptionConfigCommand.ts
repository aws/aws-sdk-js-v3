import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetEncryptionConfig } from "../model/operations/GetEncryptionConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEncryptionConfigInput } from "../types/GetEncryptionConfigInput";
import { GetEncryptionConfigOutput } from "../types/GetEncryptionConfigOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/GetEncryptionConfigInput";
export * from "../types/GetEncryptionConfigOutput";
export * from "../types/GetEncryptionConfigExceptionsUnion";

export class GetEncryptionConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEncryptionConfigInput,
      OutputTypesUnion,
      GetEncryptionConfigOutput,
      XRayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetEncryptionConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEncryptionConfigInput,
    GetEncryptionConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetEncryptionConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetEncryptionConfigInput,
    GetEncryptionConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEncryptionConfigInput, GetEncryptionConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
