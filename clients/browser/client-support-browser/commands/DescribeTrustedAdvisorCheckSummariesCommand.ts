import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTrustedAdvisorCheckSummaries } from "../model/operations/DescribeTrustedAdvisorCheckSummaries";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTrustedAdvisorCheckSummariesInput } from "../types/DescribeTrustedAdvisorCheckSummariesInput";
import { DescribeTrustedAdvisorCheckSummariesOutput } from "../types/DescribeTrustedAdvisorCheckSummariesOutput";
import { SupportResolvedConfiguration } from "../SupportConfiguration";
export * from "../types/DescribeTrustedAdvisorCheckSummariesInput";
export * from "../types/DescribeTrustedAdvisorCheckSummariesOutput";
export * from "../types/DescribeTrustedAdvisorCheckSummariesExceptionsUnion";

export class DescribeTrustedAdvisorCheckSummariesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTrustedAdvisorCheckSummariesInput,
      OutputTypesUnion,
      DescribeTrustedAdvisorCheckSummariesOutput,
      SupportResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeTrustedAdvisorCheckSummaries;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTrustedAdvisorCheckSummariesInput,
    DescribeTrustedAdvisorCheckSummariesOutput,
    Blob
  >();

  constructor(readonly input: DescribeTrustedAdvisorCheckSummariesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SupportResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTrustedAdvisorCheckSummariesInput,
    DescribeTrustedAdvisorCheckSummariesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTrustedAdvisorCheckSummariesInput,
        DescribeTrustedAdvisorCheckSummariesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
