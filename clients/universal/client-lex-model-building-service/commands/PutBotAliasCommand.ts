import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutBotAlias } from "../model/PutBotAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutBotAliasInput } from "../types/PutBotAliasInput";
import { PutBotAliasOutput } from "../types/PutBotAliasOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/PutBotAliasInput";
export * from "../types/PutBotAliasOutput";
export * from "../types/PutBotAliasExceptionsUnion";

export class PutBotAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutBotAliasInput,
      OutputTypesUnion,
      PutBotAliasOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutBotAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutBotAliasInput,
    PutBotAliasOutput,
    Uint8Array
  >();

  constructor(readonly input: PutBotAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<PutBotAliasInput, PutBotAliasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutBotAliasInput, PutBotAliasOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
