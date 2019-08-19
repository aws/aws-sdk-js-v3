import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { LogoutUser } from "../model/operations/LogoutUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { LogoutUserInput } from "../types/LogoutUserInput";
import { LogoutUserOutput } from "../types/LogoutUserOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/LogoutUserInput";
export * from "../types/LogoutUserOutput";
export * from "../types/LogoutUserExceptionsUnion";

export class LogoutUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      LogoutUserInput,
      OutputTypesUnion,
      LogoutUserOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = LogoutUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    LogoutUserInput,
    LogoutUserOutput,
    _stream.Readable
  >();

  constructor(readonly input: LogoutUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<LogoutUserInput, LogoutUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<LogoutUserInput, LogoutUserOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
