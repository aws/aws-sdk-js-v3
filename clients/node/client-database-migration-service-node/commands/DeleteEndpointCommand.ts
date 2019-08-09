import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteEndpoint } from "../model/DeleteEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEndpointInput } from "../types/DeleteEndpointInput";
import { DeleteEndpointOutput } from "../types/DeleteEndpointOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DeleteEndpointInput";
export * from "../types/DeleteEndpointOutput";
export * from "../types/DeleteEndpointExceptionsUnion";

export class DeleteEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEndpointInput,
      OutputTypesUnion,
      DeleteEndpointOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEndpointInput,
    DeleteEndpointOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteEndpointInput, DeleteEndpointOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEndpointInput, DeleteEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
