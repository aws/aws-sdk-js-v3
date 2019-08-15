import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDomainDeliverabilityCampaign } from "../model/operations/GetDomainDeliverabilityCampaign";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDomainDeliverabilityCampaignInput } from "../types/GetDomainDeliverabilityCampaignInput";
import { GetDomainDeliverabilityCampaignOutput } from "../types/GetDomainDeliverabilityCampaignOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/GetDomainDeliverabilityCampaignInput";
export * from "../types/GetDomainDeliverabilityCampaignOutput";
export * from "../types/GetDomainDeliverabilityCampaignExceptionsUnion";

export class GetDomainDeliverabilityCampaignCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDomainDeliverabilityCampaignInput,
      OutputTypesUnion,
      GetDomainDeliverabilityCampaignOutput,
      PinpointEmailResolvedConfiguration,
      Blob
    > {
  readonly model = GetDomainDeliverabilityCampaign;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDomainDeliverabilityCampaignInput,
    GetDomainDeliverabilityCampaignOutput,
    Blob
  >();

  constructor(readonly input: GetDomainDeliverabilityCampaignInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDomainDeliverabilityCampaignInput,
    GetDomainDeliverabilityCampaignOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetDomainDeliverabilityCampaignInput,
        GetDomainDeliverabilityCampaignOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
