import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetOpenIDConnectProvider } from "../model/GetOpenIDConnectProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetOpenIDConnectProviderInput } from "../types/GetOpenIDConnectProviderInput";
import { GetOpenIDConnectProviderOutput } from "../types/GetOpenIDConnectProviderOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetOpenIDConnectProviderInput";
export * from "../types/GetOpenIDConnectProviderOutput";
export * from "../types/GetOpenIDConnectProviderExceptionsUnion";

export class GetOpenIDConnectProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetOpenIDConnectProviderInput,
      OutputTypesUnion,
      GetOpenIDConnectProviderOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetOpenIDConnectProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetOpenIDConnectProviderInput,
    GetOpenIDConnectProviderOutput,
    Uint8Array
  >();

  constructor(readonly input: GetOpenIDConnectProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetOpenIDConnectProviderInput,
    GetOpenIDConnectProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetOpenIDConnectProviderInput, GetOpenIDConnectProviderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
