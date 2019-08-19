import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteBotAlias } from "../model/operations/DeleteBotAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBotAliasInput } from "../types/DeleteBotAliasInput";
import { DeleteBotAliasOutput } from "../types/DeleteBotAliasOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/DeleteBotAliasInput";
export * from "../types/DeleteBotAliasOutput";
export * from "../types/DeleteBotAliasExceptionsUnion";

export class DeleteBotAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBotAliasInput,
      OutputTypesUnion,
      DeleteBotAliasOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteBotAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBotAliasInput,
    DeleteBotAliasOutput,
    Blob
  >();

  constructor(readonly input: DeleteBotAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteBotAliasInput, DeleteBotAliasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBotAliasInput, DeleteBotAliasOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
