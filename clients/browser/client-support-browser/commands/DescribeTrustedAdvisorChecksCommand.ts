import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTrustedAdvisorChecks } from "../model/operations/DescribeTrustedAdvisorChecks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTrustedAdvisorChecksInput } from "../types/DescribeTrustedAdvisorChecksInput";
import { DescribeTrustedAdvisorChecksOutput } from "../types/DescribeTrustedAdvisorChecksOutput";
import { SupportResolvedConfiguration } from "../SupportConfiguration";
export * from "../types/DescribeTrustedAdvisorChecksInput";
export * from "../types/DescribeTrustedAdvisorChecksOutput";
export * from "../types/DescribeTrustedAdvisorChecksExceptionsUnion";

export class DescribeTrustedAdvisorChecksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTrustedAdvisorChecksInput,
      OutputTypesUnion,
      DescribeTrustedAdvisorChecksOutput,
      SupportResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeTrustedAdvisorChecks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTrustedAdvisorChecksInput,
    DescribeTrustedAdvisorChecksOutput,
    Blob
  >();

  constructor(readonly input: DescribeTrustedAdvisorChecksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SupportResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTrustedAdvisorChecksInput,
    DescribeTrustedAdvisorChecksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTrustedAdvisorChecksInput,
        DescribeTrustedAdvisorChecksOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
