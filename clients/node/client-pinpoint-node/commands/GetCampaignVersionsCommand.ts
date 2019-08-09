import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCampaignVersions } from "../model/GetCampaignVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCampaignVersionsInput } from "../types/GetCampaignVersionsInput";
import { GetCampaignVersionsOutput } from "../types/GetCampaignVersionsOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetCampaignVersionsInput";
export * from "../types/GetCampaignVersionsOutput";
export * from "../types/GetCampaignVersionsExceptionsUnion";

export class GetCampaignVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCampaignVersionsInput,
      OutputTypesUnion,
      GetCampaignVersionsOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCampaignVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCampaignVersionsInput,
    GetCampaignVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCampaignVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCampaignVersionsInput,
    GetCampaignVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCampaignVersionsInput, GetCampaignVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
