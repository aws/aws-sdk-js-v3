import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveClientIDFromOpenIDConnectProvider } from "../model/RemoveClientIDFromOpenIDConnectProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveClientIDFromOpenIDConnectProviderInput } from "../types/RemoveClientIDFromOpenIDConnectProviderInput";
import { RemoveClientIDFromOpenIDConnectProviderOutput } from "../types/RemoveClientIDFromOpenIDConnectProviderOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/RemoveClientIDFromOpenIDConnectProviderInput";
export * from "../types/RemoveClientIDFromOpenIDConnectProviderOutput";
export * from "../types/RemoveClientIDFromOpenIDConnectProviderExceptionsUnion";

export class RemoveClientIDFromOpenIDConnectProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveClientIDFromOpenIDConnectProviderInput,
      OutputTypesUnion,
      RemoveClientIDFromOpenIDConnectProviderOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveClientIDFromOpenIDConnectProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveClientIDFromOpenIDConnectProviderInput,
    RemoveClientIDFromOpenIDConnectProviderOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveClientIDFromOpenIDConnectProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveClientIDFromOpenIDConnectProviderInput,
    RemoveClientIDFromOpenIDConnectProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RemoveClientIDFromOpenIDConnectProviderInput,
        RemoveClientIDFromOpenIDConnectProviderOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
