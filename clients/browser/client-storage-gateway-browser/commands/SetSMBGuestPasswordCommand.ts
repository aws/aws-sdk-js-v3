import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetSMBGuestPassword } from "../model/SetSMBGuestPassword";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetSMBGuestPasswordInput } from "../types/SetSMBGuestPasswordInput";
import { SetSMBGuestPasswordOutput } from "../types/SetSMBGuestPasswordOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/SetSMBGuestPasswordInput";
export * from "../types/SetSMBGuestPasswordOutput";
export * from "../types/SetSMBGuestPasswordExceptionsUnion";

export class SetSMBGuestPasswordCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetSMBGuestPasswordInput,
      OutputTypesUnion,
      SetSMBGuestPasswordOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = SetSMBGuestPassword;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetSMBGuestPasswordInput,
    SetSMBGuestPasswordOutput,
    Blob
  >();

  constructor(readonly input: SetSMBGuestPasswordInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetSMBGuestPasswordInput,
    SetSMBGuestPasswordOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetSMBGuestPasswordInput, SetSMBGuestPasswordOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
