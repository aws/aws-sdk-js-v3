import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetInstanceAccess } from "../model/operations/GetInstanceAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInstanceAccessInput } from "../types/GetInstanceAccessInput";
import { GetInstanceAccessOutput } from "../types/GetInstanceAccessOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/GetInstanceAccessInput";
export * from "../types/GetInstanceAccessOutput";
export * from "../types/GetInstanceAccessExceptionsUnion";

export class GetInstanceAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInstanceAccessInput,
      OutputTypesUnion,
      GetInstanceAccessOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = GetInstanceAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInstanceAccessInput,
    GetInstanceAccessOutput,
    Blob
  >();

  constructor(readonly input: GetInstanceAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<GetInstanceAccessInput, GetInstanceAccessOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInstanceAccessInput, GetInstanceAccessOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
