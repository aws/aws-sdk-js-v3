import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSAMLProvider } from "../model/operations/GetSAMLProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSAMLProviderInput } from "../types/GetSAMLProviderInput";
import { GetSAMLProviderOutput } from "../types/GetSAMLProviderOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetSAMLProviderInput";
export * from "../types/GetSAMLProviderOutput";
export * from "../types/GetSAMLProviderExceptionsUnion";

export class GetSAMLProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSAMLProviderInput,
      OutputTypesUnion,
      GetSAMLProviderOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = GetSAMLProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSAMLProviderInput,
    GetSAMLProviderOutput,
    Blob
  >();

  constructor(readonly input: GetSAMLProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSAMLProviderInput, GetSAMLProviderOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSAMLProviderInput, GetSAMLProviderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
