import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetApiMapping } from "../model/operations/GetApiMapping";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApiMappingInput } from "../types/GetApiMappingInput";
import { GetApiMappingOutput } from "../types/GetApiMappingOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetApiMappingInput";
export * from "../types/GetApiMappingOutput";
export * from "../types/GetApiMappingExceptionsUnion";

export class GetApiMappingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApiMappingInput,
      OutputTypesUnion,
      GetApiMappingOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetApiMapping;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApiMappingInput,
    GetApiMappingOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetApiMappingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetApiMappingInput, GetApiMappingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetApiMappingInput, GetApiMappingOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
