import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = ListOpenIDConnectProviders;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOpenIDConnectProvidersInput,
    ListOpenIDConnectProvidersOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListOpenIDConnectProvidersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
