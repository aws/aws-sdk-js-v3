import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetApiMappings } from "../model/GetApiMappings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApiMappingsInput } from "../types/GetApiMappingsInput";
import { GetApiMappingsOutput } from "../types/GetApiMappingsOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetApiMappingsInput";
export * from "../types/GetApiMappingsOutput";
export * from "../types/GetApiMappingsExceptionsUnion";

export class GetApiMappingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApiMappingsInput,
      OutputTypesUnion,
      GetApiMappingsOutput,
      ApiGatewayV2ResolvedConfiguration,
      Blob
    > {
  readonly model = GetApiMappings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApiMappingsInput,
    GetApiMappingsOutput,
    Blob
  >();

  constructor(readonly input: GetApiMappingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetApiMappingsInput, GetApiMappingsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetApiMappingsInput, GetApiMappingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
