import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSAMLProvider } from "../model/operations/CreateSAMLProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSAMLProviderInput } from "../types/CreateSAMLProviderInput";
import { CreateSAMLProviderOutput } from "../types/CreateSAMLProviderOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/CreateSAMLProviderInput";
export * from "../types/CreateSAMLProviderOutput";
export * from "../types/CreateSAMLProviderExceptionsUnion";

export class CreateSAMLProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSAMLProviderInput,
      OutputTypesUnion,
      CreateSAMLProviderOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = CreateSAMLProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSAMLProviderInput,
    CreateSAMLProviderOutput,
    Blob
  >();

  constructor(readonly input: CreateSAMLProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSAMLProviderInput,
    CreateSAMLProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSAMLProviderInput, CreateSAMLProviderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
