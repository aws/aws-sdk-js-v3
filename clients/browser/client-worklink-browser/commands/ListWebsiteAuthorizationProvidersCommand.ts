import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListWebsiteAuthorizationProviders } from "../model/ListWebsiteAuthorizationProviders";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListWebsiteAuthorizationProvidersInput } from "../types/ListWebsiteAuthorizationProvidersInput";
import { ListWebsiteAuthorizationProvidersOutput } from "../types/ListWebsiteAuthorizationProvidersOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/ListWebsiteAuthorizationProvidersInput";
export * from "../types/ListWebsiteAuthorizationProvidersOutput";
export * from "../types/ListWebsiteAuthorizationProvidersExceptionsUnion";

export class ListWebsiteAuthorizationProvidersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListWebsiteAuthorizationProvidersInput,
      OutputTypesUnion,
      ListWebsiteAuthorizationProvidersOutput,
      WorkLinkResolvedConfiguration,
      Blob
    > {
  readonly model = ListWebsiteAuthorizationProviders;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListWebsiteAuthorizationProvidersInput,
    ListWebsiteAuthorizationProvidersOutput,
    Blob
  >();

  constructor(readonly input: ListWebsiteAuthorizationProvidersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListWebsiteAuthorizationProvidersInput,
    ListWebsiteAuthorizationProvidersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListWebsiteAuthorizationProvidersInput,
        ListWebsiteAuthorizationProvidersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
