import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeletePendingAggregationRequest } from "../model/DeletePendingAggregationRequest";
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
      _stream.Readable
    > {
  readonly model = DeletePendingAggregationRequest;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePendingAggregationRequestInput,
    DeletePendingAggregationRequestOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeletePendingAggregationRequestInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
