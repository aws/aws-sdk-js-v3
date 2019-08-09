import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateAlias } from "../model/UpdateAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAliasInput } from "../types/UpdateAliasInput";
import { UpdateAliasOutput } from "../types/UpdateAliasOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/UpdateAliasInput";
export * from "../types/UpdateAliasOutput";
export * from "../types/UpdateAliasExceptionsUnion";

export class UpdateAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAliasInput,
      OutputTypesUnion,
      UpdateAliasOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAliasInput,
    UpdateAliasOutput,
    Blob
  >();

  constructor(readonly input: UpdateAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateAliasInput, UpdateAliasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAliasInput, UpdateAliasOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
