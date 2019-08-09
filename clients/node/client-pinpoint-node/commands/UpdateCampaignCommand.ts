import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateCampaign } from "../model/UpdateCampaign";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCampaignInput } from "../types/UpdateCampaignInput";
import { UpdateCampaignOutput } from "../types/UpdateCampaignOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateCampaignInput";
export * from "../types/UpdateCampaignOutput";
export * from "../types/UpdateCampaignExceptionsUnion";

export class UpdateCampaignCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateCampaignInput,
      OutputTypesUnion,
      UpdateCampaignOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateCampaign;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCampaignInput,
    UpdateCampaignOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateCampaignInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateCampaignInput, UpdateCampaignOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateCampaignInput, UpdateCampaignOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
