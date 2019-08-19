import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBotAlias } from "../model/operations/GetBotAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBotAliasInput } from "../types/GetBotAliasInput";
import { GetBotAliasOutput } from "../types/GetBotAliasOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetBotAliasInput";
export * from "../types/GetBotAliasOutput";
export * from "../types/GetBotAliasExceptionsUnion";

export class GetBotAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBotAliasInput,
      OutputTypesUnion,
      GetBotAliasOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = GetBotAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBotAliasInput,
    GetBotAliasOutput,
    Blob
  >();

  constructor(readonly input: GetBotAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBotAliasInput, GetBotAliasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBotAliasInput, GetBotAliasOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
