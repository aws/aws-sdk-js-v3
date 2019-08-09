import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBasePathMapping } from "../model/GetBasePathMapping";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBasePathMappingInput } from "../types/GetBasePathMappingInput";
import { GetBasePathMappingOutput } from "../types/GetBasePathMappingOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetBasePathMappingInput";
export * from "../types/GetBasePathMappingOutput";
export * from "../types/GetBasePathMappingExceptionsUnion";

export class GetBasePathMappingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBasePathMappingInput,
      OutputTypesUnion,
      GetBasePathMappingOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = GetBasePathMapping;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBasePathMappingInput,
    GetBasePathMappingOutput,
    Blob
  >();

  constructor(readonly input: GetBasePathMappingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBasePathMappingInput,
    GetBasePathMappingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBasePathMappingInput, GetBasePathMappingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
