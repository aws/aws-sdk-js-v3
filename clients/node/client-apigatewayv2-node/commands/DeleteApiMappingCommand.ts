import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteApiMapping } from "../model/operations/DeleteApiMapping";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApiMappingInput } from "../types/DeleteApiMappingInput";
import { DeleteApiMappingOutput } from "../types/DeleteApiMappingOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/DeleteApiMappingInput";
export * from "../types/DeleteApiMappingOutput";
export * from "../types/DeleteApiMappingExceptionsUnion";

export class DeleteApiMappingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApiMappingInput,
      OutputTypesUnion,
      DeleteApiMappingOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteApiMapping;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApiMappingInput,
    DeleteApiMappingOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteApiMappingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteApiMappingInput, DeleteApiMappingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteApiMappingInput, DeleteApiMappingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
