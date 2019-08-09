import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetOrganizationConfigRuleDetailedStatus } from "../model/GetOrganizationConfigRuleDetailedStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetOrganizationConfigRuleDetailedStatusInput } from "../types/GetOrganizationConfigRuleDetailedStatusInput";
import { GetOrganizationConfigRuleDetailedStatusOutput } from "../types/GetOrganizationConfigRuleDetailedStatusOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/GetOrganizationConfigRuleDetailedStatusInput";
export * from "../types/GetOrganizationConfigRuleDetailedStatusOutput";
export * from "../types/GetOrganizationConfigRuleDetailedStatusExceptionsUnion";

export class GetOrganizationConfigRuleDetailedStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetOrganizationConfigRuleDetailedStatusInput,
      OutputTypesUnion,
      GetOrganizationConfigRuleDetailedStatusOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetOrganizationConfigRuleDetailedStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetOrganizationConfigRuleDetailedStatusInput,
    GetOrganizationConfigRuleDetailedStatusOutput,
    Uint8Array
  >();

  constructor(readonly input: GetOrganizationConfigRuleDetailedStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetOrganizationConfigRuleDetailedStatusInput,
    GetOrganizationConfigRuleDetailedStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetOrganizationConfigRuleDetailedStatusInput,
        GetOrganizationConfigRuleDetailedStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
