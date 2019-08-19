import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateOpenIDConnectProviderThumbprint } from "../model/operations/UpdateOpenIDConnectProviderThumbprint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateOpenIDConnectProviderThumbprintInput } from "../types/UpdateOpenIDConnectProviderThumbprintInput";
import { UpdateOpenIDConnectProviderThumbprintOutput } from "../types/UpdateOpenIDConnectProviderThumbprintOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UpdateOpenIDConnectProviderThumbprintInput";
export * from "../types/UpdateOpenIDConnectProviderThumbprintOutput";
export * from "../types/UpdateOpenIDConnectProviderThumbprintExceptionsUnion";

export class UpdateOpenIDConnectProviderThumbprintCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateOpenIDConnectProviderThumbprintInput,
      OutputTypesUnion,
      UpdateOpenIDConnectProviderThumbprintOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateOpenIDConnectProviderThumbprint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateOpenIDConnectProviderThumbprintInput,
    UpdateOpenIDConnectProviderThumbprintOutput,
    Blob
  >();

  constructor(readonly input: UpdateOpenIDConnectProviderThumbprintInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateOpenIDConnectProviderThumbprintInput,
    UpdateOpenIDConnectProviderThumbprintOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateOpenIDConnectProviderThumbprintInput,
        UpdateOpenIDConnectProviderThumbprintOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
