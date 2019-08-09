import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateInterconnect } from "../model/CreateInterconnect";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateInterconnectInput } from "../types/CreateInterconnectInput";
import { CreateInterconnectOutput } from "../types/CreateInterconnectOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/CreateInterconnectInput";
export * from "../types/CreateInterconnectOutput";
export * from "../types/CreateInterconnectExceptionsUnion";

export class CreateInterconnectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateInterconnectInput,
      OutputTypesUnion,
      CreateInterconnectOutput,
      DirectConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateInterconnect;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateInterconnectInput,
    CreateInterconnectOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateInterconnectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateInterconnectInput,
    CreateInterconnectOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateInterconnectInput, CreateInterconnectOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
