import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetIntegrationResponse } from "../model/operations/GetIntegrationResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIntegrationResponseInput } from "../types/GetIntegrationResponseInput";
import { GetIntegrationResponseOutput } from "../types/GetIntegrationResponseOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetIntegrationResponseInput";
export * from "../types/GetIntegrationResponseOutput";
export * from "../types/GetIntegrationResponseExceptionsUnion";

export class GetIntegrationResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIntegrationResponseInput,
      OutputTypesUnion,
      GetIntegrationResponseOutput,
      ApiGatewayV2ResolvedConfiguration,
      Blob
    > {
  readonly model = GetIntegrationResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIntegrationResponseInput,
    GetIntegrationResponseOutput,
    Blob
  >();

  constructor(readonly input: GetIntegrationResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetIntegrationResponseInput,
    GetIntegrationResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetIntegrationResponseInput, GetIntegrationResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
