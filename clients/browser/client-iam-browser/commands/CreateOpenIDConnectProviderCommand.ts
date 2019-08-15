import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateOpenIDConnectProvider } from "../model/operations/CreateOpenIDConnectProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateOpenIDConnectProviderInput } from "../types/CreateOpenIDConnectProviderInput";
import { CreateOpenIDConnectProviderOutput } from "../types/CreateOpenIDConnectProviderOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/CreateOpenIDConnectProviderInput";
export * from "../types/CreateOpenIDConnectProviderOutput";
export * from "../types/CreateOpenIDConnectProviderExceptionsUnion";

export class CreateOpenIDConnectProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateOpenIDConnectProviderInput,
      OutputTypesUnion,
      CreateOpenIDConnectProviderOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = CreateOpenIDConnectProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateOpenIDConnectProviderInput,
    CreateOpenIDConnectProviderOutput,
    Blob
  >();

  constructor(readonly input: CreateOpenIDConnectProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateOpenIDConnectProviderInput,
    CreateOpenIDConnectProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateOpenIDConnectProviderInput,
        CreateOpenIDConnectProviderOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
