import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ResetUserPassword } from "../model/ResetUserPassword";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetUserPasswordInput } from "../types/ResetUserPasswordInput";
import { ResetUserPasswordOutput } from "../types/ResetUserPasswordOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/ResetUserPasswordInput";
export * from "../types/ResetUserPasswordOutput";
export * from "../types/ResetUserPasswordExceptionsUnion";

export class ResetUserPasswordCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetUserPasswordInput,
      OutputTypesUnion,
      ResetUserPasswordOutput,
      DirectoryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ResetUserPassword;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetUserPasswordInput,
    ResetUserPasswordOutput,
    Uint8Array
  >();

  constructor(readonly input: ResetUserPasswordInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<ResetUserPasswordInput, ResetUserPasswordOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetUserPasswordInput, ResetUserPasswordOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
