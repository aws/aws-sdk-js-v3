import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ResolveAlias } from "../model/ResolveAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResolveAliasInput } from "../types/ResolveAliasInput";
import { ResolveAliasOutput } from "../types/ResolveAliasOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/ResolveAliasInput";
export * from "../types/ResolveAliasOutput";
export * from "../types/ResolveAliasExceptionsUnion";

export class ResolveAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResolveAliasInput,
      OutputTypesUnion,
      ResolveAliasOutput,
      GameLiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ResolveAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResolveAliasInput,
    ResolveAliasOutput,
    Uint8Array
  >();

  constructor(readonly input: ResolveAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<ResolveAliasInput, ResolveAliasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResolveAliasInput, ResolveAliasOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
