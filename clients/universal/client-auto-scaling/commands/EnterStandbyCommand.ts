import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnterStandby } from "../model/EnterStandby";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnterStandbyInput } from "../types/EnterStandbyInput";
import { EnterStandbyOutput } from "../types/EnterStandbyOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/EnterStandbyInput";
export * from "../types/EnterStandbyOutput";
export * from "../types/EnterStandbyExceptionsUnion";

export class EnterStandbyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnterStandbyInput,
      OutputTypesUnion,
      EnterStandbyOutput,
      AutoScalingResolvedConfiguration,
      Uint8Array
    > {
  readonly model = EnterStandby;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnterStandbyInput,
    EnterStandbyOutput,
    Uint8Array
  >();

  constructor(readonly input: EnterStandbyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<EnterStandbyInput, EnterStandbyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnterStandbyInput, EnterStandbyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
