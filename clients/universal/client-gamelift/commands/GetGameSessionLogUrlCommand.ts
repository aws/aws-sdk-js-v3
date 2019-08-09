import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetGameSessionLogUrl } from "../model/GetGameSessionLogUrl";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGameSessionLogUrlInput } from "../types/GetGameSessionLogUrlInput";
import { GetGameSessionLogUrlOutput } from "../types/GetGameSessionLogUrlOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/GetGameSessionLogUrlInput";
export * from "../types/GetGameSessionLogUrlOutput";
export * from "../types/GetGameSessionLogUrlExceptionsUnion";

export class GetGameSessionLogUrlCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGameSessionLogUrlInput,
      OutputTypesUnion,
      GetGameSessionLogUrlOutput,
      GameLiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetGameSessionLogUrl;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGameSessionLogUrlInput,
    GetGameSessionLogUrlOutput,
    Uint8Array
  >();

  constructor(readonly input: GetGameSessionLogUrlInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetGameSessionLogUrlInput,
    GetGameSessionLogUrlOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetGameSessionLogUrlInput, GetGameSessionLogUrlOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
