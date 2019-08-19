import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateBot } from "../model/operations/UpdateBot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateBotInput } from "../types/UpdateBotInput";
import { UpdateBotOutput } from "../types/UpdateBotOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/UpdateBotInput";
export * from "../types/UpdateBotOutput";
export * from "../types/UpdateBotExceptionsUnion";

export class UpdateBotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateBotInput,
      OutputTypesUnion,
      UpdateBotOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateBot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateBotInput,
    UpdateBotOutput,
    Blob
  >();

  constructor(readonly input: UpdateBotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateBotInput, UpdateBotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateBotInput, UpdateBotOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
