import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutEncryptionConfig } from "../model/PutEncryptionConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutEncryptionConfigInput } from "../types/PutEncryptionConfigInput";
import { PutEncryptionConfigOutput } from "../types/PutEncryptionConfigOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/PutEncryptionConfigInput";
export * from "../types/PutEncryptionConfigOutput";
export * from "../types/PutEncryptionConfigExceptionsUnion";

export class PutEncryptionConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutEncryptionConfigInput,
      OutputTypesUnion,
      PutEncryptionConfigOutput,
      XRayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutEncryptionConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutEncryptionConfigInput,
    PutEncryptionConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutEncryptionConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutEncryptionConfigInput,
    PutEncryptionConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutEncryptionConfigInput, PutEncryptionConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
