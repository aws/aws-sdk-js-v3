import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDevEndpoint } from "../model/DeleteDevEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDevEndpointInput } from "../types/DeleteDevEndpointInput";
import { DeleteDevEndpointOutput } from "../types/DeleteDevEndpointOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/DeleteDevEndpointInput";
export * from "../types/DeleteDevEndpointOutput";
export * from "../types/DeleteDevEndpointExceptionsUnion";

export class DeleteDevEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDevEndpointInput,
      OutputTypesUnion,
      DeleteDevEndpointOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDevEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDevEndpointInput,
    DeleteDevEndpointOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDevEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDevEndpointInput, DeleteDevEndpointOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDevEndpointInput, DeleteDevEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
