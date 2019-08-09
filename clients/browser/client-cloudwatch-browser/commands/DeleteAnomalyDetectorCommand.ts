import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAnomalyDetector } from "../model/DeleteAnomalyDetector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAnomalyDetectorInput } from "../types/DeleteAnomalyDetectorInput";
import { DeleteAnomalyDetectorOutput } from "../types/DeleteAnomalyDetectorOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/DeleteAnomalyDetectorInput";
export * from "../types/DeleteAnomalyDetectorOutput";
export * from "../types/DeleteAnomalyDetectorExceptionsUnion";

export class DeleteAnomalyDetectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAnomalyDetectorInput,
      OutputTypesUnion,
      DeleteAnomalyDetectorOutput,
      CloudWatchResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteAnomalyDetector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAnomalyDetectorInput,
    DeleteAnomalyDetectorOutput,
    Blob
  >();

  constructor(readonly input: DeleteAnomalyDetectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteAnomalyDetectorInput,
    DeleteAnomalyDetectorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAnomalyDetectorInput, DeleteAnomalyDetectorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
