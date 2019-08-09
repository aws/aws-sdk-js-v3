import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeHostReservations } from "../model/DescribeHostReservations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeHostReservationsInput } from "../types/DescribeHostReservationsInput";
import { DescribeHostReservationsOutput } from "../types/DescribeHostReservationsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeHostReservationsInput";
export * from "../types/DescribeHostReservationsOutput";
export * from "../types/DescribeHostReservationsExceptionsUnion";

export class DescribeHostReservationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeHostReservationsInput,
      OutputTypesUnion,
      DescribeHostReservationsOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeHostReservations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeHostReservationsInput,
    DescribeHostReservationsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeHostReservationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeHostReservationsInput,
    DescribeHostReservationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeHostReservationsInput, DescribeHostReservationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
