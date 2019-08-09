import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCampaignDateRangeKpi } from "../model/GetCampaignDateRangeKpi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCampaignDateRangeKpiInput } from "../types/GetCampaignDateRangeKpiInput";
import { GetCampaignDateRangeKpiOutput } from "../types/GetCampaignDateRangeKpiOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetCampaignDateRangeKpiInput";
export * from "../types/GetCampaignDateRangeKpiOutput";
export * from "../types/GetCampaignDateRangeKpiExceptionsUnion";

export class GetCampaignDateRangeKpiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCampaignDateRangeKpiInput,
      OutputTypesUnion,
      GetCampaignDateRangeKpiOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = GetCampaignDateRangeKpi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCampaignDateRangeKpiInput,
    GetCampaignDateRangeKpiOutput,
    Blob
  >();

  constructor(readonly input: GetCampaignDateRangeKpiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCampaignDateRangeKpiInput,
    GetCampaignDateRangeKpiOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCampaignDateRangeKpiInput, GetCampaignDateRangeKpiOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
