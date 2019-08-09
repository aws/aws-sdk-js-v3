import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateLunaClient } from "../model/CreateLunaClient";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLunaClientInput } from "../types/CreateLunaClientInput";
import { CreateLunaClientOutput } from "../types/CreateLunaClientOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/CreateLunaClientInput";
export * from "../types/CreateLunaClientOutput";
export * from "../types/CreateLunaClientExceptionsUnion";

export class CreateLunaClientCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLunaClientInput,
      OutputTypesUnion,
      CreateLunaClientOutput,
      CloudHSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateLunaClient;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLunaClientInput,
    CreateLunaClientOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateLunaClientInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateLunaClientInput, CreateLunaClientOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLunaClientInput, CreateLunaClientOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
