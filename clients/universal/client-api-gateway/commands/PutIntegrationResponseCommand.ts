import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutIntegrationResponse } from "../model/PutIntegrationResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutIntegrationResponseInput } from "../types/PutIntegrationResponseInput";
import { PutIntegrationResponseOutput } from "../types/PutIntegrationResponseOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/PutIntegrationResponseInput";
export * from "../types/PutIntegrationResponseOutput";
export * from "../types/PutIntegrationResponseExceptionsUnion";

export class PutIntegrationResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutIntegrationResponseInput,
      OutputTypesUnion,
      PutIntegrationResponseOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutIntegrationResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutIntegrationResponseInput,
    PutIntegrationResponseOutput,
    Uint8Array
  >();

  constructor(readonly input: PutIntegrationResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutIntegrationResponseInput,
    PutIntegrationResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutIntegrationResponseInput, PutIntegrationResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
