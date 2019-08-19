import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetInstanceProtection } from "../model/operations/SetInstanceProtection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetInstanceProtectionInput } from "../types/SetInstanceProtectionInput";
import { SetInstanceProtectionOutput } from "../types/SetInstanceProtectionOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/SetInstanceProtectionInput";
export * from "../types/SetInstanceProtectionOutput";
export * from "../types/SetInstanceProtectionExceptionsUnion";

export class SetInstanceProtectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetInstanceProtectionInput,
      OutputTypesUnion,
      SetInstanceProtectionOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SetInstanceProtection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetInstanceProtectionInput,
    SetInstanceProtectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetInstanceProtectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetInstanceProtectionInput,
    SetInstanceProtectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetInstanceProtectionInput, SetInstanceProtectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
