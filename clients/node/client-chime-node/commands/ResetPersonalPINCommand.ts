import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResetPersonalPIN } from "../model/ResetPersonalPIN";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetPersonalPINInput } from "../types/ResetPersonalPINInput";
import { ResetPersonalPINOutput } from "../types/ResetPersonalPINOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/ResetPersonalPINInput";
export * from "../types/ResetPersonalPINOutput";
export * from "../types/ResetPersonalPINExceptionsUnion";

export class ResetPersonalPINCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetPersonalPINInput,
      OutputTypesUnion,
      ResetPersonalPINOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResetPersonalPIN;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetPersonalPINInput,
    ResetPersonalPINOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResetPersonalPINInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<ResetPersonalPINInput, ResetPersonalPINOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetPersonalPINInput, ResetPersonalPINOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
