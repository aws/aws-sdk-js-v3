import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetIntegrationResponses } from "../model/GetIntegrationResponses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIntegrationResponsesInput } from "../types/GetIntegrationResponsesInput";
import { GetIntegrationResponsesOutput } from "../types/GetIntegrationResponsesOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetIntegrationResponsesInput";
export * from "../types/GetIntegrationResponsesOutput";
export * from "../types/GetIntegrationResponsesExceptionsUnion";

export class GetIntegrationResponsesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIntegrationResponsesInput,
      OutputTypesUnion,
      GetIntegrationResponsesOutput,
      ApiGatewayV2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetIntegrationResponses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIntegrationResponsesInput,
    GetIntegrationResponsesOutput,
    Uint8Array
  >();

  constructor(readonly input: GetIntegrationResponsesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetIntegrationResponsesInput,
    GetIntegrationResponsesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetIntegrationResponsesInput, GetIntegrationResponsesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
