import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteSAMLProvider } from "../model/operations/DeleteSAMLProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSAMLProviderInput } from "../types/DeleteSAMLProviderInput";
import { DeleteSAMLProviderOutput } from "../types/DeleteSAMLProviderOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteSAMLProviderInput";
export * from "../types/DeleteSAMLProviderOutput";
export * from "../types/DeleteSAMLProviderExceptionsUnion";

export class DeleteSAMLProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSAMLProviderInput,
      OutputTypesUnion,
      DeleteSAMLProviderOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteSAMLProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSAMLProviderInput,
    DeleteSAMLProviderOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteSAMLProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSAMLProviderInput,
    DeleteSAMLProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSAMLProviderInput, DeleteSAMLProviderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
