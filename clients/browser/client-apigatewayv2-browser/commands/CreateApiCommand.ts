import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateApi } from "../model/CreateApi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateApiInput } from "../types/CreateApiInput";
import { CreateApiOutput } from "../types/CreateApiOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/CreateApiInput";
export * from "../types/CreateApiOutput";
export * from "../types/CreateApiExceptionsUnion";

export class CreateApiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateApiInput,
      OutputTypesUnion,
      CreateApiOutput,
      ApiGatewayV2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateApi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateApiInput,
    CreateApiOutput,
    Blob
  >();

  constructor(readonly input: CreateApiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateApiInput, CreateApiOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateApiInput, CreateApiOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
