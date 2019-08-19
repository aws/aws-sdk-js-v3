import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBotAliases } from "../model/operations/GetBotAliases";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBotAliasesInput } from "../types/GetBotAliasesInput";
import { GetBotAliasesOutput } from "../types/GetBotAliasesOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetBotAliasesInput";
export * from "../types/GetBotAliasesOutput";
export * from "../types/GetBotAliasesExceptionsUnion";

export class GetBotAliasesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBotAliasesInput,
      OutputTypesUnion,
      GetBotAliasesOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = GetBotAliases;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBotAliasesInput,
    GetBotAliasesOutput,
    Blob
  >();

  constructor(readonly input: GetBotAliasesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBotAliasesInput, GetBotAliasesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBotAliasesInput, GetBotAliasesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
