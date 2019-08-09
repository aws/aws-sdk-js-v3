import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListReservations } from "../model/ListReservations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListReservationsInput } from "../types/ListReservationsInput";
import { ListReservationsOutput } from "../types/ListReservationsOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/ListReservationsInput";
export * from "../types/ListReservationsOutput";
export * from "../types/ListReservationsExceptionsUnion";

export class ListReservationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListReservationsInput,
      OutputTypesUnion,
      ListReservationsOutput,
      MediaLiveResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListReservations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListReservationsInput,
    ListReservationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListReservationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<ListReservationsInput, ListReservationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListReservationsInput, ListReservationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
