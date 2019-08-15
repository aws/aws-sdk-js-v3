import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateIntegrationResponse } from "../model/operations/CreateIntegrationResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateIntegrationResponseInput } from "../types/CreateIntegrationResponseInput";
import { CreateIntegrationResponseOutput } from "../types/CreateIntegrationResponseOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/CreateIntegrationResponseInput";
export * from "../types/CreateIntegrationResponseOutput";
export * from "../types/CreateIntegrationResponseExceptionsUnion";

export class CreateIntegrationResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateIntegrationResponseInput,
      OutputTypesUnion,
      CreateIntegrationResponseOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateIntegrationResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateIntegrationResponseInput,
    CreateIntegrationResponseOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateIntegrationResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateIntegrationResponseInput,
    CreateIntegrationResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateIntegrationResponseInput, CreateIntegrationResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
