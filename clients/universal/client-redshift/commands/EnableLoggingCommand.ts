import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableLogging } from "../model/EnableLogging";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableLoggingInput } from "../types/EnableLoggingInput";
import { EnableLoggingOutput } from "../types/EnableLoggingOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/EnableLoggingInput";
export * from "../types/EnableLoggingOutput";
export * from "../types/EnableLoggingExceptionsUnion";

export class EnableLoggingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableLoggingInput,
      OutputTypesUnion,
      EnableLoggingOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = EnableLogging;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableLoggingInput,
    EnableLoggingOutput,
    Uint8Array
  >();

  constructor(readonly input: EnableLoggingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<EnableLoggingInput, EnableLoggingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableLoggingInput, EnableLoggingOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
