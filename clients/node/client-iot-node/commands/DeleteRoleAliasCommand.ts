import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteRoleAlias } from "../model/DeleteRoleAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRoleAliasInput } from "../types/DeleteRoleAliasInput";
import { DeleteRoleAliasOutput } from "../types/DeleteRoleAliasOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteRoleAliasInput";
export * from "../types/DeleteRoleAliasOutput";
export * from "../types/DeleteRoleAliasExceptionsUnion";

export class DeleteRoleAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRoleAliasInput,
      OutputTypesUnion,
      DeleteRoleAliasOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteRoleAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRoleAliasInput,
    DeleteRoleAliasOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteRoleAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteRoleAliasInput, DeleteRoleAliasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRoleAliasInput, DeleteRoleAliasOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
