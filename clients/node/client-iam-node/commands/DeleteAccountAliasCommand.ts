import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteAccountAlias } from "../model/operations/DeleteAccountAlias";
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
      _stream.Readable
    > {
  readonly model = DeleteAccountAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAccountAliasInput,
    DeleteAccountAliasOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteAccountAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
