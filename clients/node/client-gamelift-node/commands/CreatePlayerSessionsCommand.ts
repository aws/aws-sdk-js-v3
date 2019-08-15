import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreatePlayerSessions } from "../model/operations/CreatePlayerSessions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePlayerSessionsInput } from "../types/CreatePlayerSessionsInput";
import { CreatePlayerSessionsOutput } from "../types/CreatePlayerSessionsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/CreatePlayerSessionsInput";
export * from "../types/CreatePlayerSessionsOutput";
export * from "../types/CreatePlayerSessionsExceptionsUnion";

export class CreatePlayerSessionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePlayerSessionsInput,
      OutputTypesUnion,
      CreatePlayerSessionsOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreatePlayerSessions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePlayerSessionsInput,
    CreatePlayerSessionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreatePlayerSessionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePlayerSessionsInput,
    CreatePlayerSessionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePlayerSessionsInput, CreatePlayerSessionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
