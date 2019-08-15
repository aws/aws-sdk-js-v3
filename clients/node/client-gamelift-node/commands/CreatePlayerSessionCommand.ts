import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreatePlayerSession } from "../model/operations/CreatePlayerSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePlayerSessionInput } from "../types/CreatePlayerSessionInput";
import { CreatePlayerSessionOutput } from "../types/CreatePlayerSessionOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/CreatePlayerSessionInput";
export * from "../types/CreatePlayerSessionOutput";
export * from "../types/CreatePlayerSessionExceptionsUnion";

export class CreatePlayerSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePlayerSessionInput,
      OutputTypesUnion,
      CreatePlayerSessionOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreatePlayerSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePlayerSessionInput,
    CreatePlayerSessionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreatePlayerSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePlayerSessionInput,
    CreatePlayerSessionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePlayerSessionInput, CreatePlayerSessionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
