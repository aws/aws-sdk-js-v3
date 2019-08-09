import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetBasePathMappings } from "../model/GetBasePathMappings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBasePathMappingsInput } from "../types/GetBasePathMappingsInput";
import { GetBasePathMappingsOutput } from "../types/GetBasePathMappingsOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetBasePathMappingsInput";
export * from "../types/GetBasePathMappingsOutput";
export * from "../types/GetBasePathMappingsExceptionsUnion";

export class GetBasePathMappingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBasePathMappingsInput,
      OutputTypesUnion,
      GetBasePathMappingsOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetBasePathMappings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBasePathMappingsInput,
    GetBasePathMappingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetBasePathMappingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBasePathMappingsInput,
    GetBasePathMappingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBasePathMappingsInput, GetBasePathMappingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
