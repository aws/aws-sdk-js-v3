import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateReservation } from "../model/UpdateReservation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateReservationInput } from "../types/UpdateReservationInput";
import { UpdateReservationOutput } from "../types/UpdateReservationOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/UpdateReservationInput";
export * from "../types/UpdateReservationOutput";
export * from "../types/UpdateReservationExceptionsUnion";

export class UpdateReservationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateReservationInput,
      OutputTypesUnion,
      UpdateReservationOutput,
      MediaLiveResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateReservation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateReservationInput,
    UpdateReservationOutput,
    Blob
  >();

  constructor(readonly input: UpdateReservationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateReservationInput, UpdateReservationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateReservationInput, UpdateReservationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
