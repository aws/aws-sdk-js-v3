import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDatasetContent } from "../model/CreateDatasetContent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDatasetContentInput } from "../types/CreateDatasetContentInput";
import { CreateDatasetContentOutput } from "../types/CreateDatasetContentOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/CreateDatasetContentInput";
export * from "../types/CreateDatasetContentOutput";
export * from "../types/CreateDatasetContentExceptionsUnion";

export class CreateDatasetContentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDatasetContentInput,
      OutputTypesUnion,
      CreateDatasetContentOutput,
      IoTAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDatasetContent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDatasetContentInput,
    CreateDatasetContentOutput,
    Blob
  >();

  constructor(readonly input: CreateDatasetContentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDatasetContentInput,
    CreateDatasetContentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDatasetContentInput, CreateDatasetContentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
