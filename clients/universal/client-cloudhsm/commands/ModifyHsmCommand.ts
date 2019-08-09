import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyHsm } from "../model/ModifyHsm";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyHsmInput } from "../types/ModifyHsmInput";
import { ModifyHsmOutput } from "../types/ModifyHsmOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/ModifyHsmInput";
export * from "../types/ModifyHsmOutput";
export * from "../types/ModifyHsmExceptionsUnion";

export class ModifyHsmCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyHsmInput,
      OutputTypesUnion,
      ModifyHsmOutput,
      CloudHSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyHsm;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyHsmInput,
    ModifyHsmOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyHsmInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyHsmInput, ModifyHsmOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyHsmInput, ModifyHsmOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
