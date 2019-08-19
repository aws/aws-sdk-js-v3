import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetIntegration } from "../model/operations/GetIntegration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIntegrationInput } from "../types/GetIntegrationInput";
import { GetIntegrationOutput } from "../types/GetIntegrationOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetIntegrationInput";
export * from "../types/GetIntegrationOutput";
export * from "../types/GetIntegrationExceptionsUnion";

export class GetIntegrationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIntegrationInput,
      OutputTypesUnion,
      GetIntegrationOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = GetIntegration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIntegrationInput,
    GetIntegrationOutput,
    Blob
  >();

  constructor(readonly input: GetIntegrationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetIntegrationInput, GetIntegrationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetIntegrationInput, GetIntegrationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
