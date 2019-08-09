import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateHsm } from "../model/CreateHsm";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateHsmInput } from "../types/CreateHsmInput";
import { CreateHsmOutput } from "../types/CreateHsmOutput";
import { CloudHSMV2ResolvedConfiguration } from "../CloudHSMV2Configuration";
export * from "../types/CreateHsmInput";
export * from "../types/CreateHsmOutput";
export * from "../types/CreateHsmExceptionsUnion";

export class CreateHsmCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateHsmInput,
      OutputTypesUnion,
      CreateHsmOutput,
      CloudHSMV2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateHsm;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateHsmInput,
    CreateHsmOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateHsmInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudHSMV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateHsmInput, CreateHsmOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateHsmInput, CreateHsmOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
