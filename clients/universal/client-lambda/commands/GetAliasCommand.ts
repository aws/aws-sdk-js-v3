import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAlias } from "../model/GetAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAliasInput } from "../types/GetAliasInput";
import { GetAliasOutput } from "../types/GetAliasOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/GetAliasInput";
export * from "../types/GetAliasOutput";
export * from "../types/GetAliasExceptionsUnion";

export class GetAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAliasInput,
      OutputTypesUnion,
      GetAliasOutput,
      LambdaResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAliasInput,
    GetAliasOutput,
    Uint8Array
  >();

  constructor(readonly input: GetAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAliasInput, GetAliasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAliasInput, GetAliasOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
