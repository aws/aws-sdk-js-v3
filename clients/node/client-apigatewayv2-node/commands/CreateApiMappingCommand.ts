import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateApiMapping } from "../model/CreateApiMapping";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateApiMappingInput } from "../types/CreateApiMappingInput";
import { CreateApiMappingOutput } from "../types/CreateApiMappingOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/CreateApiMappingInput";
export * from "../types/CreateApiMappingOutput";
export * from "../types/CreateApiMappingExceptionsUnion";

export class CreateApiMappingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateApiMappingInput,
      OutputTypesUnion,
      CreateApiMappingOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateApiMapping;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateApiMappingInput,
    CreateApiMappingOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateApiMappingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateApiMappingInput, CreateApiMappingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateApiMappingInput, CreateApiMappingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
