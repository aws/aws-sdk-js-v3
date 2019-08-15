import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSSHPublicKey } from "../model/operations/GetSSHPublicKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSSHPublicKeyInput } from "../types/GetSSHPublicKeyInput";
import { GetSSHPublicKeyOutput } from "../types/GetSSHPublicKeyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetSSHPublicKeyInput";
export * from "../types/GetSSHPublicKeyOutput";
export * from "../types/GetSSHPublicKeyExceptionsUnion";

export class GetSSHPublicKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSSHPublicKeyInput,
      OutputTypesUnion,
      GetSSHPublicKeyOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSSHPublicKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSSHPublicKeyInput,
    GetSSHPublicKeyOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSSHPublicKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSSHPublicKeyInput, GetSSHPublicKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSSHPublicKeyInput, GetSSHPublicKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
