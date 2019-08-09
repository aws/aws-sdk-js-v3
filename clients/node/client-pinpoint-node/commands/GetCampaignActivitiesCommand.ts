import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCampaignActivities } from "../model/GetCampaignActivities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCampaignActivitiesInput } from "../types/GetCampaignActivitiesInput";
import { GetCampaignActivitiesOutput } from "../types/GetCampaignActivitiesOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetCampaignActivitiesInput";
export * from "../types/GetCampaignActivitiesOutput";
export * from "../types/GetCampaignActivitiesExceptionsUnion";

export class GetCampaignActivitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCampaignActivitiesInput,
      OutputTypesUnion,
      GetCampaignActivitiesOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCampaignActivities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCampaignActivitiesInput,
    GetCampaignActivitiesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCampaignActivitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCampaignActivitiesInput,
    GetCampaignActivitiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCampaignActivitiesInput, GetCampaignActivitiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
