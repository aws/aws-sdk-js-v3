import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDatasetContents } from "../model/operations/ListDatasetContents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDatasetContentsInput } from "../types/ListDatasetContentsInput";
import { ListDatasetContentsOutput } from "../types/ListDatasetContentsOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/ListDatasetContentsInput";
export * from "../types/ListDatasetContentsOutput";
export * from "../types/ListDatasetContentsExceptionsUnion";

export class ListDatasetContentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDatasetContentsInput,
      OutputTypesUnion,
      ListDatasetContentsOutput,
      IoTAnalyticsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDatasetContents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDatasetContentsInput,
    ListDatasetContentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDatasetContentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDatasetContentsInput,
    ListDatasetContentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDatasetContentsInput, ListDatasetContentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
