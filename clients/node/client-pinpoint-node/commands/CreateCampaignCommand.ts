import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCampaign } from "../model/CreateCampaign";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCampaignInput } from "../types/CreateCampaignInput";
import { CreateCampaignOutput } from "../types/CreateCampaignOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/CreateCampaignInput";
export * from "../types/CreateCampaignOutput";
export * from "../types/CreateCampaignExceptionsUnion";

export class CreateCampaignCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCampaignInput,
      OutputTypesUnion,
      CreateCampaignOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCampaign;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCampaignInput,
    CreateCampaignOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCampaignInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateCampaignInput, CreateCampaignOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCampaignInput, CreateCampaignOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
