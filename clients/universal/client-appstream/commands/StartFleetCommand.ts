import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartFleet } from "../model/StartFleet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartFleetInput } from "../types/StartFleetInput";
import { StartFleetOutput } from "../types/StartFleetOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/StartFleetInput";
export * from "../types/StartFleetOutput";
export * from "../types/StartFleetExceptionsUnion";

export class StartFleetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartFleetInput,
      OutputTypesUnion,
      StartFleetOutput,
      AppStreamResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StartFleet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartFleetInput,
    StartFleetOutput,
    Uint8Array
  >();

  constructor(readonly input: StartFleetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<StartFleetInput, StartFleetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartFleetInput, StartFleetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
