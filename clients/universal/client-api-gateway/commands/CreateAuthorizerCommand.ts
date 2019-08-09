import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateAuthorizer } from "../model/CreateAuthorizer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAuthorizerInput } from "../types/CreateAuthorizerInput";
import { CreateAuthorizerOutput } from "../types/CreateAuthorizerOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/CreateAuthorizerInput";
export * from "../types/CreateAuthorizerOutput";
export * from "../types/CreateAuthorizerExceptionsUnion";

export class CreateAuthorizerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAuthorizerInput,
      OutputTypesUnion,
      CreateAuthorizerOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateAuthorizer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAuthorizerInput,
    CreateAuthorizerOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateAuthorizerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateAuthorizerInput, CreateAuthorizerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAuthorizerInput, CreateAuthorizerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
