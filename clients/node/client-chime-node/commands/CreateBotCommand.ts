import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateBot } from "../model/operations/CreateBot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBotInput } from "../types/CreateBotInput";
import { CreateBotOutput } from "../types/CreateBotOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/CreateBotInput";
export * from "../types/CreateBotOutput";
export * from "../types/CreateBotExceptionsUnion";

export class CreateBotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBotInput,
      OutputTypesUnion,
      CreateBotOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateBot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBotInput,
    CreateBotOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateBotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateBotInput, CreateBotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateBotInput, CreateBotOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
