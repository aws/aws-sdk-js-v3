import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetComplianceSummaryByResourceType } from "../model/GetComplianceSummaryByResourceType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetComplianceSummaryByResourceTypeInput } from "../types/GetComplianceSummaryByResourceTypeInput";
import { GetComplianceSummaryByResourceTypeOutput } from "../types/GetComplianceSummaryByResourceTypeOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/GetComplianceSummaryByResourceTypeInput";
export * from "../types/GetComplianceSummaryByResourceTypeOutput";
export * from "../types/GetComplianceSummaryByResourceTypeExceptionsUnion";

export class GetComplianceSummaryByResourceTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetComplianceSummaryByResourceTypeInput,
      OutputTypesUnion,
      GetComplianceSummaryByResourceTypeOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetComplianceSummaryByResourceType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetComplianceSummaryByResourceTypeInput,
    GetComplianceSummaryByResourceTypeOutput,
    Uint8Array
  >();

  constructor(readonly input: GetComplianceSummaryByResourceTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetComplianceSummaryByResourceTypeInput,
    GetComplianceSummaryByResourceTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetComplianceSummaryByResourceTypeInput,
        GetComplianceSummaryByResourceTypeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
