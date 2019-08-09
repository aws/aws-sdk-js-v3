import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBasePathMapping } from "../model/DeleteBasePathMapping";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBasePathMappingInput } from "../types/DeleteBasePathMappingInput";
import { DeleteBasePathMappingOutput } from "../types/DeleteBasePathMappingOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteBasePathMappingInput";
export * from "../types/DeleteBasePathMappingOutput";
export * from "../types/DeleteBasePathMappingExceptionsUnion";

export class DeleteBasePathMappingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBasePathMappingInput,
      OutputTypesUnion,
      DeleteBasePathMappingOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBasePathMapping;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBasePathMappingInput,
    DeleteBasePathMappingOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBasePathMappingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBasePathMappingInput,
    DeleteBasePathMappingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBasePathMappingInput, DeleteBasePathMappingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
