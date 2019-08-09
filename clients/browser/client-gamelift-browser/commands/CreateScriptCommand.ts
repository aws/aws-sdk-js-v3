import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateScript } from "../model/CreateScript";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateScriptInput } from "../types/CreateScriptInput";
import { CreateScriptOutput } from "../types/CreateScriptOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/CreateScriptInput";
export * from "../types/CreateScriptOutput";
export * from "../types/CreateScriptExceptionsUnion";

export class CreateScriptCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateScriptInput,
      OutputTypesUnion,
      CreateScriptOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = CreateScript;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateScriptInput,
    CreateScriptOutput,
    Blob
  >();

  constructor(readonly input: CreateScriptInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateScriptInput, CreateScriptOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateScriptInput, CreateScriptOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
