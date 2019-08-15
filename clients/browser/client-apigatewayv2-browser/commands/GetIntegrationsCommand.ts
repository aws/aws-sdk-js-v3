import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetIntegrations } from "../model/operations/GetIntegrations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIntegrationsInput } from "../types/GetIntegrationsInput";
import { GetIntegrationsOutput } from "../types/GetIntegrationsOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetIntegrationsInput";
export * from "../types/GetIntegrationsOutput";
export * from "../types/GetIntegrationsExceptionsUnion";

export class GetIntegrationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIntegrationsInput,
      OutputTypesUnion,
      GetIntegrationsOutput,
      ApiGatewayV2ResolvedConfiguration,
      Blob
    > {
  readonly model = GetIntegrations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIntegrationsInput,
    GetIntegrationsOutput,
    Blob
  >();

  constructor(readonly input: GetIntegrationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetIntegrationsInput, GetIntegrationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetIntegrationsInput, GetIntegrationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
