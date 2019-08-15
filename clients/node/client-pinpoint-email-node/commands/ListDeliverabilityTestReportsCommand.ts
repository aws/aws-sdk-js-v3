import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDeliverabilityTestReports } from "../model/operations/ListDeliverabilityTestReports";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDeliverabilityTestReportsInput } from "../types/ListDeliverabilityTestReportsInput";
import { ListDeliverabilityTestReportsOutput } from "../types/ListDeliverabilityTestReportsOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/ListDeliverabilityTestReportsInput";
export * from "../types/ListDeliverabilityTestReportsOutput";
export * from "../types/ListDeliverabilityTestReportsExceptionsUnion";

export class ListDeliverabilityTestReportsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDeliverabilityTestReportsInput,
      OutputTypesUnion,
      ListDeliverabilityTestReportsOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDeliverabilityTestReports;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeliverabilityTestReportsInput,
    ListDeliverabilityTestReportsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDeliverabilityTestReportsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDeliverabilityTestReportsInput,
    ListDeliverabilityTestReportsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListDeliverabilityTestReportsInput,
        ListDeliverabilityTestReportsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
