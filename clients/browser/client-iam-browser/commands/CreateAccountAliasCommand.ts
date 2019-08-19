import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateAccountAlias } from "../model/operations/CreateAccountAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAccountAliasInput } from "../types/CreateAccountAliasInput";
import { CreateAccountAliasOutput } from "../types/CreateAccountAliasOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/CreateAccountAliasInput";
export * from "../types/CreateAccountAliasOutput";
export * from "../types/CreateAccountAliasExceptionsUnion";

export class CreateAccountAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAccountAliasInput,
      OutputTypesUnion,
      CreateAccountAliasOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = CreateAccountAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAccountAliasInput,
    CreateAccountAliasOutput,
    Blob
  >();

  constructor(readonly input: CreateAccountAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateAccountAliasInput,
    CreateAccountAliasOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAccountAliasInput, CreateAccountAliasOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
