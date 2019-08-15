import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TerminateSession } from "../model/operations/TerminateSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TerminateSessionInput } from "../types/TerminateSessionInput";
import { TerminateSessionOutput } from "../types/TerminateSessionOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/TerminateSessionInput";
export * from "../types/TerminateSessionOutput";
export * from "../types/TerminateSessionExceptionsUnion";

export class TerminateSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TerminateSessionInput,
      OutputTypesUnion,
      TerminateSessionOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = TerminateSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TerminateSessionInput,
    TerminateSessionOutput,
    _stream.Readable
  >();

  constructor(readonly input: TerminateSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<TerminateSessionInput, TerminateSessionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TerminateSessionInput, TerminateSessionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
