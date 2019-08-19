import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ImportSshPublicKey } from "../model/operations/ImportSshPublicKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportSshPublicKeyInput } from "../types/ImportSshPublicKeyInput";
import { ImportSshPublicKeyOutput } from "../types/ImportSshPublicKeyOutput";
import { TransferResolvedConfiguration } from "../TransferConfiguration";
export * from "../types/ImportSshPublicKeyInput";
export * from "../types/ImportSshPublicKeyOutput";
export * from "../types/ImportSshPublicKeyExceptionsUnion";

export class ImportSshPublicKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportSshPublicKeyInput,
      OutputTypesUnion,
      ImportSshPublicKeyOutput,
      TransferResolvedConfiguration,
      Blob
    > {
  readonly model = ImportSshPublicKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportSshPublicKeyInput,
    ImportSshPublicKeyOutput,
    Blob
  >();

  constructor(readonly input: ImportSshPublicKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: TransferResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ImportSshPublicKeyInput,
    ImportSshPublicKeyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportSshPublicKeyInput, ImportSshPublicKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
