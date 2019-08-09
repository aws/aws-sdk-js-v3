import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListResourceComplianceSummaries } from "../model/ListResourceComplianceSummaries";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResourceComplianceSummariesInput } from "../types/ListResourceComplianceSummariesInput";
import { ListResourceComplianceSummariesOutput } from "../types/ListResourceComplianceSummariesOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ListResourceComplianceSummariesInput";
export * from "../types/ListResourceComplianceSummariesOutput";
export * from "../types/ListResourceComplianceSummariesExceptionsUnion";

export class ListResourceComplianceSummariesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResourceComplianceSummariesInput,
      OutputTypesUnion,
      ListResourceComplianceSummariesOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListResourceComplianceSummaries;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResourceComplianceSummariesInput,
    ListResourceComplianceSummariesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListResourceComplianceSummariesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListResourceComplianceSummariesInput,
    ListResourceComplianceSummariesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListResourceComplianceSummariesInput,
        ListResourceComplianceSummariesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
