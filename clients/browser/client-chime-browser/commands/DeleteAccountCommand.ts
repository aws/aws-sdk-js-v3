import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAccount } from "../model/DeleteAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAccountInput } from "../types/DeleteAccountInput";
import { DeleteAccountOutput } from "../types/DeleteAccountOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/DeleteAccountInput";
export * from "../types/DeleteAccountOutput";
export * from "../types/DeleteAccountExceptionsUnion";

export class DeleteAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAccountInput,
      OutputTypesUnion,
      DeleteAccountOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAccountInput,
    DeleteAccountOutput,
    Blob
  >();

  constructor(readonly input: DeleteAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAccountInput, DeleteAccountOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAccountInput, DeleteAccountOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
