import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateApiMapping } from "../model/UpdateApiMapping";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateApiMappingInput } from "../types/UpdateApiMappingInput";
import { UpdateApiMappingOutput } from "../types/UpdateApiMappingOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/UpdateApiMappingInput";
export * from "../types/UpdateApiMappingOutput";
export * from "../types/UpdateApiMappingExceptionsUnion";

export class UpdateApiMappingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateApiMappingInput,
      OutputTypesUnion,
      UpdateApiMappingOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateApiMapping;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateApiMappingInput,
    UpdateApiMappingOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateApiMappingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateApiMappingInput, UpdateApiMappingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateApiMappingInput, UpdateApiMappingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
