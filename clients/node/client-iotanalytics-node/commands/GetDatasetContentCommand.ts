import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDatasetContent } from "../model/operations/GetDatasetContent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDatasetContentInput } from "../types/GetDatasetContentInput";
import { GetDatasetContentOutput } from "../types/GetDatasetContentOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/GetDatasetContentInput";
export * from "../types/GetDatasetContentOutput";
export * from "../types/GetDatasetContentExceptionsUnion";

export class GetDatasetContentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDatasetContentInput,
      OutputTypesUnion,
      GetDatasetContentOutput,
      IoTAnalyticsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDatasetContent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDatasetContentInput,
    GetDatasetContentOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDatasetContentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDatasetContentInput, GetDatasetContentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDatasetContentInput, GetDatasetContentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
