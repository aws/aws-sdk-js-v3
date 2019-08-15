import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateRoleAlias } from "../model/operations/CreateRoleAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRoleAliasInput } from "../types/CreateRoleAliasInput";
import { CreateRoleAliasOutput } from "../types/CreateRoleAliasOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CreateRoleAliasInput";
export * from "../types/CreateRoleAliasOutput";
export * from "../types/CreateRoleAliasExceptionsUnion";

export class CreateRoleAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRoleAliasInput,
      OutputTypesUnion,
      CreateRoleAliasOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateRoleAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRoleAliasInput,
    CreateRoleAliasOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateRoleAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateRoleAliasInput, CreateRoleAliasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRoleAliasInput, CreateRoleAliasOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
