import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetTerminationProtection } from "../model/SetTerminationProtection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetTerminationProtectionInput } from "../types/SetTerminationProtectionInput";
import { SetTerminationProtectionOutput } from "../types/SetTerminationProtectionOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/SetTerminationProtectionInput";
export * from "../types/SetTerminationProtectionOutput";
export * from "../types/SetTerminationProtectionExceptionsUnion";

export class SetTerminationProtectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetTerminationProtectionInput,
      OutputTypesUnion,
      SetTerminationProtectionOutput,
      EMRResolvedConfiguration,
      Blob
    > {
  readonly model = SetTerminationProtection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetTerminationProtectionInput,
    SetTerminationProtectionOutput,
    Blob
  >();

  constructor(readonly input: SetTerminationProtectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetTerminationProtectionInput,
    SetTerminationProtectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetTerminationProtectionInput, SetTerminationProtectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
