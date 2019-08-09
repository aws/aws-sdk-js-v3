import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSSHPublicKey } from "../model/DeleteSSHPublicKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSSHPublicKeyInput } from "../types/DeleteSSHPublicKeyInput";
import { DeleteSSHPublicKeyOutput } from "../types/DeleteSSHPublicKeyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteSSHPublicKeyInput";
export * from "../types/DeleteSSHPublicKeyOutput";
export * from "../types/DeleteSSHPublicKeyExceptionsUnion";

export class DeleteSSHPublicKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSSHPublicKeyInput,
      OutputTypesUnion,
      DeleteSSHPublicKeyOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteSSHPublicKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSSHPublicKeyInput,
    DeleteSSHPublicKeyOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteSSHPublicKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSSHPublicKeyInput,
    DeleteSSHPublicKeyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSSHPublicKeyInput, DeleteSSHPublicKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
