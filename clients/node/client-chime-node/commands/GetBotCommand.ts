import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetBot } from "../model/operations/GetBot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBotInput } from "../types/GetBotInput";
import { GetBotOutput } from "../types/GetBotOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/GetBotInput";
export * from "../types/GetBotOutput";
export * from "../types/GetBotExceptionsUnion";

export class GetBotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBotInput,
      OutputTypesUnion,
      GetBotOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetBot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBotInput,
    GetBotOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetBotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBotInput, GetBotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBotInput, GetBotOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
