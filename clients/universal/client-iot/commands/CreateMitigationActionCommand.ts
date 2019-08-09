import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateMitigationAction } from "../model/CreateMitigationAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateMitigationActionInput } from "../types/CreateMitigationActionInput";
import { CreateMitigationActionOutput } from "../types/CreateMitigationActionOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CreateMitigationActionInput";
export * from "../types/CreateMitigationActionOutput";
export * from "../types/CreateMitigationActionExceptionsUnion";

export class CreateMitigationActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateMitigationActionInput,
      OutputTypesUnion,
      CreateMitigationActionOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateMitigationAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateMitigationActionInput,
    CreateMitigationActionOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateMitigationActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateMitigationActionInput,
    CreateMitigationActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateMitigationActionInput, CreateMitigationActionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
