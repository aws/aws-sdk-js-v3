import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListComplianceSummaries } from "../model/ListComplianceSummaries";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListComplianceSummariesInput } from "../types/ListComplianceSummariesInput";
import { ListComplianceSummariesOutput } from "../types/ListComplianceSummariesOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ListComplianceSummariesInput";
export * from "../types/ListComplianceSummariesOutput";
export * from "../types/ListComplianceSummariesExceptionsUnion";

export class ListComplianceSummariesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListComplianceSummariesInput,
      OutputTypesUnion,
      ListComplianceSummariesOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListComplianceSummaries;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListComplianceSummariesInput,
    ListComplianceSummariesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListComplianceSummariesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListComplianceSummariesInput,
    ListComplianceSummariesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListComplianceSummariesInput, ListComplianceSummariesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
