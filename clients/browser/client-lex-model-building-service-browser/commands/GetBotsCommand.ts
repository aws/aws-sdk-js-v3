import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBots } from "../model/GetBots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBotsInput } from "../types/GetBotsInput";
import { GetBotsOutput } from "../types/GetBotsOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetBotsInput";
export * from "../types/GetBotsOutput";
export * from "../types/GetBotsExceptionsUnion";

export class GetBotsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBotsInput,
      OutputTypesUnion,
      GetBotsOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = GetBots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBotsInput,
    GetBotsOutput,
    Blob
  >();

  constructor(readonly input: GetBotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBotsInput, GetBotsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBotsInput, GetBotsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
