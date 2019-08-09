import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeReservation } from "../model/DescribeReservation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReservationInput } from "../types/DescribeReservationInput";
import { DescribeReservationOutput } from "../types/DescribeReservationOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/DescribeReservationInput";
export * from "../types/DescribeReservationOutput";
export * from "../types/DescribeReservationExceptionsUnion";

export class DescribeReservationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReservationInput,
      OutputTypesUnion,
      DescribeReservationOutput,
      MediaLiveResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeReservation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReservationInput,
    DescribeReservationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeReservationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReservationInput,
    DescribeReservationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeReservationInput, DescribeReservationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
