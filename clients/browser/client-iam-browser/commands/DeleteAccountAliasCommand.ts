import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAccountAlias } from "../model/DeleteAccountAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAccountAliasInput } from "../types/DeleteAccountAliasInput";
import { DeleteAccountAliasOutput } from "../types/DeleteAccountAliasOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteAccountAliasInput";
export * from "../types/DeleteAccountAliasOutput";
export * from "../types/DeleteAccountAliasExceptionsUnion";

export class DeleteAccountAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAccountAliasInput,
      OutputTypesUnion,
      DeleteAccountAliasOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteAccountAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAccountAliasInput,
    DeleteAccountAliasOutput,
    Blob
  >();

  constructor(readonly input: DeleteAccountAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteAccountAliasInput,
    DeleteAccountAliasOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAccountAliasInput, DeleteAccountAliasOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
