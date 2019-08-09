import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRandomPassword } from "../model/GetRandomPassword";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRandomPasswordInput } from "../types/GetRandomPasswordInput";
import { GetRandomPasswordOutput } from "../types/GetRandomPasswordOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/GetRandomPasswordInput";
export * from "../types/GetRandomPasswordOutput";
export * from "../types/GetRandomPasswordExceptionsUnion";

export class GetRandomPasswordCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRandomPasswordInput,
      OutputTypesUnion,
      GetRandomPasswordOutput,
      SecretsManagerResolvedConfiguration,
      Blob
    > {
  readonly model = GetRandomPassword;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRandomPasswordInput,
    GetRandomPasswordOutput,
    Blob
  >();

  constructor(readonly input: GetRandomPasswordInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRandomPasswordInput, GetRandomPasswordOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRandomPasswordInput, GetRandomPasswordOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
