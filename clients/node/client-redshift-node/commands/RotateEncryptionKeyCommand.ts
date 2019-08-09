import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RotateEncryptionKey } from "../model/RotateEncryptionKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RotateEncryptionKeyInput } from "../types/RotateEncryptionKeyInput";
import { RotateEncryptionKeyOutput } from "../types/RotateEncryptionKeyOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/RotateEncryptionKeyInput";
export * from "../types/RotateEncryptionKeyOutput";
export * from "../types/RotateEncryptionKeyExceptionsUnion";

export class RotateEncryptionKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RotateEncryptionKeyInput,
      OutputTypesUnion,
      RotateEncryptionKeyOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RotateEncryptionKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RotateEncryptionKeyInput,
    RotateEncryptionKeyOutput,
    _stream.Readable
  >();

  constructor(readonly input: RotateEncryptionKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RotateEncryptionKeyInput,
    RotateEncryptionKeyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RotateEncryptionKeyInput, RotateEncryptionKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
