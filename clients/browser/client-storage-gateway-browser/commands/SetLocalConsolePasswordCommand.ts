import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetLocalConsolePassword } from "../model/SetLocalConsolePassword";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetLocalConsolePasswordInput } from "../types/SetLocalConsolePasswordInput";
import { SetLocalConsolePasswordOutput } from "../types/SetLocalConsolePasswordOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/SetLocalConsolePasswordInput";
export * from "../types/SetLocalConsolePasswordOutput";
export * from "../types/SetLocalConsolePasswordExceptionsUnion";

export class SetLocalConsolePasswordCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetLocalConsolePasswordInput,
      OutputTypesUnion,
      SetLocalConsolePasswordOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = SetLocalConsolePassword;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetLocalConsolePasswordInput,
    SetLocalConsolePasswordOutput,
    Blob
  >();

  constructor(readonly input: SetLocalConsolePasswordInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetLocalConsolePasswordInput,
    SetLocalConsolePasswordOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetLocalConsolePasswordInput, SetLocalConsolePasswordOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
