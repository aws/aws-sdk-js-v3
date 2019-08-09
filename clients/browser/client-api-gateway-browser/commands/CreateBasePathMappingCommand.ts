import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateBasePathMapping } from "../model/CreateBasePathMapping";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBasePathMappingInput } from "../types/CreateBasePathMappingInput";
import { CreateBasePathMappingOutput } from "../types/CreateBasePathMappingOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/CreateBasePathMappingInput";
export * from "../types/CreateBasePathMappingOutput";
export * from "../types/CreateBasePathMappingExceptionsUnion";

export class CreateBasePathMappingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBasePathMappingInput,
      OutputTypesUnion,
      CreateBasePathMappingOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = CreateBasePathMapping;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBasePathMappingInput,
    CreateBasePathMappingOutput,
    Blob
  >();

  constructor(readonly input: CreateBasePathMappingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateBasePathMappingInput,
    CreateBasePathMappingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateBasePathMappingInput, CreateBasePathMappingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
