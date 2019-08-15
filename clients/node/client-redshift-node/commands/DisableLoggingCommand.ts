import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisableLogging } from "../model/operations/DisableLogging";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableLoggingInput } from "../types/DisableLoggingInput";
import { DisableLoggingOutput } from "../types/DisableLoggingOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DisableLoggingInput";
export * from "../types/DisableLoggingOutput";
export * from "../types/DisableLoggingExceptionsUnion";

export class DisableLoggingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableLoggingInput,
      OutputTypesUnion,
      DisableLoggingOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisableLogging;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableLoggingInput,
    DisableLoggingOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisableLoggingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<DisableLoggingInput, DisableLoggingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableLoggingInput, DisableLoggingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
