import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDataset } from "../model/operations/DeleteDataset";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDatasetInput } from "../types/DeleteDatasetInput";
import { DeleteDatasetOutput } from "../types/DeleteDatasetOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/DeleteDatasetInput";
export * from "../types/DeleteDatasetOutput";
export * from "../types/DeleteDatasetExceptionsUnion";

export class DeleteDatasetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDatasetInput,
      OutputTypesUnion,
      DeleteDatasetOutput,
      IoTAnalyticsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDataset;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDatasetInput,
    DeleteDatasetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDatasetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDatasetInput, DeleteDatasetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDatasetInput, DeleteDatasetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
