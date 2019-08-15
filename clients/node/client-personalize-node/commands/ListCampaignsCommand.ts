import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListCampaigns } from "../model/operations/ListCampaigns";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCampaignsInput } from "../types/ListCampaignsInput";
import { ListCampaignsOutput } from "../types/ListCampaignsOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/ListCampaignsInput";
export * from "../types/ListCampaignsOutput";
export * from "../types/ListCampaignsExceptionsUnion";

export class ListCampaignsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCampaignsInput,
      OutputTypesUnion,
      ListCampaignsOutput,
      PersonalizeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListCampaigns;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCampaignsInput,
    ListCampaignsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListCampaignsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<ListCampaignsInput, ListCampaignsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListCampaignsInput, ListCampaignsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
