import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { LaunchApp } from "../model/LaunchApp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { LaunchAppInput } from "../types/LaunchAppInput";
import { LaunchAppOutput } from "../types/LaunchAppOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/LaunchAppInput";
export * from "../types/LaunchAppOutput";
export * from "../types/LaunchAppExceptionsUnion";

export class LaunchAppCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      LaunchAppInput,
      OutputTypesUnion,
      LaunchAppOutput,
      SMSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = LaunchApp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    LaunchAppInput,
    LaunchAppOutput,
    Uint8Array
  >();

  constructor(readonly input: LaunchAppInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<LaunchAppInput, LaunchAppOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<LaunchAppInput, LaunchAppOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
