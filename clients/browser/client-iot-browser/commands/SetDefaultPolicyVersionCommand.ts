import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetDefaultPolicyVersion } from "../model/SetDefaultPolicyVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetDefaultPolicyVersionInput } from "../types/SetDefaultPolicyVersionInput";
import { SetDefaultPolicyVersionOutput } from "../types/SetDefaultPolicyVersionOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/SetDefaultPolicyVersionInput";
export * from "../types/SetDefaultPolicyVersionOutput";
export * from "../types/SetDefaultPolicyVersionExceptionsUnion";

export class SetDefaultPolicyVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetDefaultPolicyVersionInput,
      OutputTypesUnion,
      SetDefaultPolicyVersionOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = SetDefaultPolicyVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetDefaultPolicyVersionInput,
    SetDefaultPolicyVersionOutput,
    Blob
  >();

  constructor(readonly input: SetDefaultPolicyVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetDefaultPolicyVersionInput,
    SetDefaultPolicyVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetDefaultPolicyVersionInput, SetDefaultPolicyVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
