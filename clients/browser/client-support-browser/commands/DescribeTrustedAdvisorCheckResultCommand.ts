import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTrustedAdvisorCheckResult } from "../model/DescribeTrustedAdvisorCheckResult";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTrustedAdvisorCheckResultInput } from "../types/DescribeTrustedAdvisorCheckResultInput";
import { DescribeTrustedAdvisorCheckResultOutput } from "../types/DescribeTrustedAdvisorCheckResultOutput";
import { SupportResolvedConfiguration } from "../SupportConfiguration";
export * from "../types/DescribeTrustedAdvisorCheckResultInput";
export * from "../types/DescribeTrustedAdvisorCheckResultOutput";
export * from "../types/DescribeTrustedAdvisorCheckResultExceptionsUnion";

export class DescribeTrustedAdvisorCheckResultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTrustedAdvisorCheckResultInput,
      OutputTypesUnion,
      DescribeTrustedAdvisorCheckResultOutput,
      SupportResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeTrustedAdvisorCheckResult;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTrustedAdvisorCheckResultInput,
    DescribeTrustedAdvisorCheckResultOutput,
    Blob
  >();

  constructor(readonly input: DescribeTrustedAdvisorCheckResultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SupportResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTrustedAdvisorCheckResultInput,
    DescribeTrustedAdvisorCheckResultOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTrustedAdvisorCheckResultInput,
        DescribeTrustedAdvisorCheckResultOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
