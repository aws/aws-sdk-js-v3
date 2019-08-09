import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateIntegrationResponse } from "../model/UpdateIntegrationResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateIntegrationResponseInput } from "../types/UpdateIntegrationResponseInput";
import { UpdateIntegrationResponseOutput } from "../types/UpdateIntegrationResponseOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/UpdateIntegrationResponseInput";
export * from "../types/UpdateIntegrationResponseOutput";
export * from "../types/UpdateIntegrationResponseExceptionsUnion";

export class UpdateIntegrationResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateIntegrationResponseInput,
      OutputTypesUnion,
      UpdateIntegrationResponseOutput,
      ApiGatewayV2ResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateIntegrationResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateIntegrationResponseInput,
    UpdateIntegrationResponseOutput,
    Blob
  >();

  constructor(readonly input: UpdateIntegrationResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateIntegrationResponseInput,
    UpdateIntegrationResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateIntegrationResponseInput, UpdateIntegrationResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
