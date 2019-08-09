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
      Blob
    > {
  readonly model = CreateInterconnect;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateInterconnectInput,
    CreateInterconnectOutput,
    Blob
  >();

  constructor(readonly input: CreateInterconnectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
