import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTrustedAdvisorCheckRefreshStatuses } from "../model/DescribeTrustedAdvisorCheckRefreshStatuses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTrustedAdvisorCheckRefreshStatusesInput } from "../types/DescribeTrustedAdvisorCheckRefreshStatusesInput";
import { DescribeTrustedAdvisorCheckRefreshStatusesOutput } from "../types/DescribeTrustedAdvisorCheckRefreshStatusesOutput";
import { SupportResolvedConfiguration } from "../SupportConfiguration";
export * from "../types/DescribeTrustedAdvisorCheckRefreshStatusesInput";
export * from "../types/DescribeTrustedAdvisorCheckRefreshStatusesOutput";
export * from "../types/DescribeTrustedAdvisorCheckRefreshStatusesExceptionsUnion";

export class DescribeTrustedAdvisorCheckRefreshStatusesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTrustedAdvisorCheckRefreshStatusesInput,
      OutputTypesUnion,
      DescribeTrustedAdvisorCheckRefreshStatusesOutput,
      SupportResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeTrustedAdvisorCheckRefreshStatuses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTrustedAdvisorCheckRefreshStatusesInput,
    DescribeTrustedAdvisorCheckRefreshStatusesOutput,
    _stream.Readable
  >();

  constructor(
    readonly input: DescribeTrustedAdvisorCheckRefreshStatusesInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SupportResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTrustedAdvisorCheckRefreshStatusesInput,
    DescribeTrustedAdvisorCheckRefreshStatusesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTrustedAdvisorCheckRefreshStatusesInput,
        DescribeTrustedAdvisorCheckRefreshStatusesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
