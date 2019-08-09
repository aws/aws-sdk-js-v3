import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ExitStandby } from "../model/ExitStandby";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExitStandbyInput } from "../types/ExitStandbyInput";
import { ExitStandbyOutput } from "../types/ExitStandbyOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/ExitStandbyInput";
export * from "../types/ExitStandbyOutput";
export * from "../types/ExitStandbyExceptionsUnion";

export class ExitStandbyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExitStandbyInput,
      OutputTypesUnion,
      ExitStandbyOutput,
      AutoScalingResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ExitStandby;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExitStandbyInput,
    ExitStandbyOutput,
    Uint8Array
  >();

  constructor(readonly input: ExitStandbyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<ExitStandbyInput, ExitStandbyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ExitStandbyInput, ExitStandbyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
