import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeletePendingAggregationRequest } from "../model/operations/DeletePendingAggregationRequest";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePendingAggregationRequestInput } from "../types/DeletePendingAggregationRequestInput";
import { DeletePendingAggregationRequestOutput } from "../types/DeletePendingAggregationRequestOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DeletePendingAggregationRequestInput";
export * from "../types/DeletePendingAggregationRequestOutput";
export * from "../types/DeletePendingAggregationRequestExceptionsUnion";

export class DeletePendingAggregationRequestCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePendingAggregationRequestInput,
      OutputTypesUnion,
      DeletePendingAggregationRequestOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeletePendingAggregationRequest;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePendingAggregationRequestInput,
    DeletePendingAggregationRequestOutput,
    Blob
  >();

  constructor(readonly input: DeletePendingAggregationRequestInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeletePendingAggregationRequestInput,
    DeletePendingAggregationRequestOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeletePendingAggregationRequestInput,
        DeletePendingAggregationRequestOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
