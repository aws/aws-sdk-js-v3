import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UploadSSHPublicKey } from "../model/UploadSSHPublicKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UploadSSHPublicKeyInput } from "../types/UploadSSHPublicKeyInput";
import { UploadSSHPublicKeyOutput } from "../types/UploadSSHPublicKeyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UploadSSHPublicKeyInput";
export * from "../types/UploadSSHPublicKeyOutput";
export * from "../types/UploadSSHPublicKeyExceptionsUnion";

export class UploadSSHPublicKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UploadSSHPublicKeyInput,
      OutputTypesUnion,
      UploadSSHPublicKeyOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UploadSSHPublicKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UploadSSHPublicKeyInput,
    UploadSSHPublicKeyOutput,
    _stream.Readable
  >();

  constructor(readonly input: UploadSSHPublicKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UploadSSHPublicKeyInput,
    UploadSSHPublicKeyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UploadSSHPublicKeyInput, UploadSSHPublicKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
