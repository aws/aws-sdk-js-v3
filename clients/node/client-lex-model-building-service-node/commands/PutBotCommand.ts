import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutBot } from "../model/PutBot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutBotInput } from "../types/PutBotInput";
import { PutBotOutput } from "../types/PutBotOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/PutBotInput";
export * from "../types/PutBotOutput";
export * from "../types/PutBotExceptionsUnion";

export class PutBotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutBotInput,
      OutputTypesUnion,
      PutBotOutput,
      LexModelBuildingServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutBot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutBotInput,
    PutBotOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutBotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<PutBotInput, PutBotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutBotInput, PutBotOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
