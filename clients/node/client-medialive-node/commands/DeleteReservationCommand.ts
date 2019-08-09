import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteReservation } from "../model/DeleteReservation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteReservationInput } from "../types/DeleteReservationInput";
import { DeleteReservationOutput } from "../types/DeleteReservationOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/DeleteReservationInput";
export * from "../types/DeleteReservationOutput";
export * from "../types/DeleteReservationExceptionsUnion";

export class DeleteReservationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteReservationInput,
      OutputTypesUnion,
      DeleteReservationOutput,
      MediaLiveResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteReservation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteReservationInput,
    DeleteReservationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteReservationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteReservationInput, DeleteReservationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteReservationInput, DeleteReservationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
