import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyLunaClient } from "../model/operations/ModifyLunaClient";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyLunaClientInput } from "../types/ModifyLunaClientInput";
import { ModifyLunaClientOutput } from "../types/ModifyLunaClientOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/ModifyLunaClientInput";
export * from "../types/ModifyLunaClientOutput";
export * from "../types/ModifyLunaClientExceptionsUnion";

export class ModifyLunaClientCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyLunaClientInput,
      OutputTypesUnion,
      ModifyLunaClientOutput,
      CloudHSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyLunaClient;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyLunaClientInput,
    ModifyLunaClientOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyLunaClientInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyLunaClientInput, ModifyLunaClientOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyLunaClientInput, ModifyLunaClientOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
