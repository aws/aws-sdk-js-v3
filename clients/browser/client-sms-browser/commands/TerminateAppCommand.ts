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
      Blob
    > {
  readonly model = TerminateApp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TerminateAppInput,
    TerminateAppOutput,
    Blob
  >();

  constructor(readonly input: TerminateAppInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
