import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteOpenIDConnectProvider } from "../model/operations/DeleteOpenIDConnectProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteOpenIDConnectProviderInput } from "../types/DeleteOpenIDConnectProviderInput";
import { DeleteOpenIDConnectProviderOutput } from "../types/DeleteOpenIDConnectProviderOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteOpenIDConnectProviderInput";
export * from "../types/DeleteOpenIDConnectProviderOutput";
export * from "../types/DeleteOpenIDConnectProviderExceptionsUnion";

export class DeleteOpenIDConnectProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteOpenIDConnectProviderInput,
      OutputTypesUnion,
      DeleteOpenIDConnectProviderOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteOpenIDConnectProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteOpenIDConnectProviderInput,
    DeleteOpenIDConnectProviderOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteOpenIDConnectProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteOpenIDConnectProviderInput,
    DeleteOpenIDConnectProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteOpenIDConnectProviderInput,
        DeleteOpenIDConnectProviderOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
