import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDatastore } from "../model/DeleteDatastore";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDatastoreInput } from "../types/DeleteDatastoreInput";
import { DeleteDatastoreOutput } from "../types/DeleteDatastoreOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/DeleteDatastoreInput";
export * from "../types/DeleteDatastoreOutput";
export * from "../types/DeleteDatastoreExceptionsUnion";

export class DeleteDatastoreCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDatastoreInput,
      OutputTypesUnion,
      DeleteDatastoreOutput,
      IoTAnalyticsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDatastore;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDatastoreInput,
    DeleteDatastoreOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDatastoreInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDatastoreInput, DeleteDatastoreOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDatastoreInput, DeleteDatastoreOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
