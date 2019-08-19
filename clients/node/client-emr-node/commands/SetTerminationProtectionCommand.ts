import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetTerminationProtection } from "../model/operations/SetTerminationProtection";
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
      _stream.Readable
    > {
  readonly model = SetTerminationProtection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetTerminationProtectionInput,
    SetTerminationProtectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetTerminationProtectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
