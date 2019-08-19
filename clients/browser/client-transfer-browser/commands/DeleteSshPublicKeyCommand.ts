import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSshPublicKey } from "../model/operations/DeleteSshPublicKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSshPublicKeyInput } from "../types/DeleteSshPublicKeyInput";
import { DeleteSshPublicKeyOutput } from "../types/DeleteSshPublicKeyOutput";
import { TransferResolvedConfiguration } from "../TransferConfiguration";
export * from "../types/DeleteSshPublicKeyInput";
export * from "../types/DeleteSshPublicKeyOutput";
export * from "../types/DeleteSshPublicKeyExceptionsUnion";

export class DeleteSshPublicKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSshPublicKeyInput,
      OutputTypesUnion,
      DeleteSshPublicKeyOutput,
      TransferResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSshPublicKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSshPublicKeyInput,
    DeleteSshPublicKeyOutput,
    Blob
  >();

  constructor(readonly input: DeleteSshPublicKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: TransferResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSshPublicKeyInput,
    DeleteSshPublicKeyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSshPublicKeyInput, DeleteSshPublicKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
