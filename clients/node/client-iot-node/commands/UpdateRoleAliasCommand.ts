import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateRoleAlias } from "../model/UpdateRoleAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRoleAliasInput } from "../types/UpdateRoleAliasInput";
import { UpdateRoleAliasOutput } from "../types/UpdateRoleAliasOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateRoleAliasInput";
export * from "../types/UpdateRoleAliasOutput";
export * from "../types/UpdateRoleAliasExceptionsUnion";

export class UpdateRoleAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRoleAliasInput,
      OutputTypesUnion,
      UpdateRoleAliasOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateRoleAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRoleAliasInput,
    UpdateRoleAliasOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateRoleAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateRoleAliasInput, UpdateRoleAliasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRoleAliasInput, UpdateRoleAliasOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
