import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateCampaign } from "../model/operations/UpdateCampaign";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCampaignInput } from "../types/UpdateCampaignInput";
import { UpdateCampaignOutput } from "../types/UpdateCampaignOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
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
      PersonalizeResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateCampaign;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCampaignInput,
    UpdateCampaignOutput,
    Blob
  >();

  constructor(readonly input: UpdateCampaignInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PersonalizeResolvedConfiguration
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
