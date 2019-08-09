import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RefreshTrustedAdvisorCheck } from "../model/RefreshTrustedAdvisorCheck";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RefreshTrustedAdvisorCheckInput } from "../types/RefreshTrustedAdvisorCheckInput";
import { RefreshTrustedAdvisorCheckOutput } from "../types/RefreshTrustedAdvisorCheckOutput";
import { SupportResolvedConfiguration } from "../SupportConfiguration";
export * from "../types/RefreshTrustedAdvisorCheckInput";
export * from "../types/RefreshTrustedAdvisorCheckOutput";
export * from "../types/RefreshTrustedAdvisorCheckExceptionsUnion";

export class RefreshTrustedAdvisorCheckCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RefreshTrustedAdvisorCheckInput,
      OutputTypesUnion,
      RefreshTrustedAdvisorCheckOutput,
      SupportResolvedConfiguration,
      Blob
    > {
  readonly model = RefreshTrustedAdvisorCheck;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RefreshTrustedAdvisorCheckInput,
    RefreshTrustedAdvisorCheckOutput,
    Blob
  >();

  constructor(readonly input: RefreshTrustedAdvisorCheckInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SupportResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RefreshTrustedAdvisorCheckInput,
    RefreshTrustedAdvisorCheckOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RefreshTrustedAdvisorCheckInput,
        RefreshTrustedAdvisorCheckOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
