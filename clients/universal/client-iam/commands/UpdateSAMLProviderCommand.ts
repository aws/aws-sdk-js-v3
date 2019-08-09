import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateSAMLProvider } from "../model/UpdateSAMLProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSAMLProviderInput } from "../types/UpdateSAMLProviderInput";
import { UpdateSAMLProviderOutput } from "../types/UpdateSAMLProviderOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UpdateSAMLProviderInput";
export * from "../types/UpdateSAMLProviderOutput";
export * from "../types/UpdateSAMLProviderExceptionsUnion";

export class UpdateSAMLProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSAMLProviderInput,
      OutputTypesUnion,
      UpdateSAMLProviderOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateSAMLProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSAMLProviderInput,
    UpdateSAMLProviderOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateSAMLProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSAMLProviderInput,
    UpdateSAMLProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSAMLProviderInput, UpdateSAMLProviderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
