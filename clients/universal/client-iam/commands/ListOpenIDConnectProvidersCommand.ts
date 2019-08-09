import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListOpenIDConnectProviders } from "../model/ListOpenIDConnectProviders";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOpenIDConnectProvidersInput } from "../types/ListOpenIDConnectProvidersInput";
import { ListOpenIDConnectProvidersOutput } from "../types/ListOpenIDConnectProvidersOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListOpenIDConnectProvidersInput";
export * from "../types/ListOpenIDConnectProvidersOutput";
export * from "../types/ListOpenIDConnectProvidersExceptionsUnion";

export class ListOpenIDConnectProvidersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOpenIDConnectProvidersInput,
      OutputTypesUnion,
      ListOpenIDConnectProvidersOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListOpenIDConnectProviders;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOpenIDConnectProvidersInput,
    ListOpenIDConnectProvidersOutput,
    Uint8Array
  >();

  constructor(readonly input: ListOpenIDConnectProvidersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListOpenIDConnectProvidersInput,
    ListOpenIDConnectProvidersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListOpenIDConnectProvidersInput,
        ListOpenIDConnectProvidersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
