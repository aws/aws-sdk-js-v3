import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDataset } from "../model/operations/UpdateDataset";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDatasetInput } from "../types/UpdateDatasetInput";
import { UpdateDatasetOutput } from "../types/UpdateDatasetOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/UpdateDatasetInput";
export * from "../types/UpdateDatasetOutput";
export * from "../types/UpdateDatasetExceptionsUnion";

export class UpdateDatasetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDatasetInput,
      OutputTypesUnion,
      UpdateDatasetOutput,
      IoTAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDataset;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDatasetInput,
    UpdateDatasetOutput,
    Blob
  >();

  constructor(readonly input: UpdateDatasetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDatasetInput, UpdateDatasetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDatasetInput, UpdateDatasetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
