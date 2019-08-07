import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCampaign } from "../model/GetCampaign";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCampaignInput } from "../types/GetCampaignInput";
import { GetCampaignOutput } from "../types/GetCampaignOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetCampaignInput";
export * from "../types/GetCampaignOutput";
export * from "../types/GetCampaignExceptionsUnion";

export class GetCampaignCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCampaignInput,
      OutputTypesUnion,
      GetCampaignOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = GetCampaign;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCampaignInput,
    GetCampaignOutput,
    Blob
  >();

  constructor(readonly input: GetCampaignInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCampaignInput, GetCampaignOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCampaignInput, GetCampaignOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
