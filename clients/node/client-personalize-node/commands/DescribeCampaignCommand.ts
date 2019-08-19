import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCampaign } from "../model/operations/DescribeCampaign";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCampaignInput } from "../types/DescribeCampaignInput";
import { DescribeCampaignOutput } from "../types/DescribeCampaignOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/DescribeCampaignInput";
export * from "../types/DescribeCampaignOutput";
export * from "../types/DescribeCampaignExceptionsUnion";

export class DescribeCampaignCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCampaignInput,
      OutputTypesUnion,
      DescribeCampaignOutput,
      PersonalizeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCampaign;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCampaignInput,
    DescribeCampaignOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCampaignInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeCampaignInput, DescribeCampaignOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCampaignInput, DescribeCampaignOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
