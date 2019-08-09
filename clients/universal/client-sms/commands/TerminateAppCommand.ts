import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TerminateApp } from "../model/TerminateApp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TerminateAppInput } from "../types/TerminateAppInput";
import { TerminateAppOutput } from "../types/TerminateAppOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/TerminateAppInput";
export * from "../types/TerminateAppOutput";
export * from "../types/TerminateAppExceptionsUnion";

export class TerminateAppCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TerminateAppInput,
      OutputTypesUnion,
      TerminateAppOutput,
      SMSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = TerminateApp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TerminateAppInput,
    TerminateAppOutput,
    Uint8Array
  >();

  constructor(readonly input: TerminateAppInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<TerminateAppInput, TerminateAppOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TerminateAppInput, TerminateAppOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
