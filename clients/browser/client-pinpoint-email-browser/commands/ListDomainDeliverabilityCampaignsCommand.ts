import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDomainDeliverabilityCampaigns } from "../model/ListDomainDeliverabilityCampaigns";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDomainDeliverabilityCampaignsInput } from "../types/ListDomainDeliverabilityCampaignsInput";
import { ListDomainDeliverabilityCampaignsOutput } from "../types/ListDomainDeliverabilityCampaignsOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/ListDomainDeliverabilityCampaignsInput";
export * from "../types/ListDomainDeliverabilityCampaignsOutput";
export * from "../types/ListDomainDeliverabilityCampaignsExceptionsUnion";

export class ListDomainDeliverabilityCampaignsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDomainDeliverabilityCampaignsInput,
      OutputTypesUnion,
      ListDomainDeliverabilityCampaignsOutput,
      PinpointEmailResolvedConfiguration,
      Blob
    > {
  readonly model = ListDomainDeliverabilityCampaigns;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDomainDeliverabilityCampaignsInput,
    ListDomainDeliverabilityCampaignsOutput,
    Blob
  >();

  constructor(readonly input: ListDomainDeliverabilityCampaignsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDomainDeliverabilityCampaignsInput,
    ListDomainDeliverabilityCampaignsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListDomainDeliverabilityCampaignsInput,
        ListDomainDeliverabilityCampaignsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
