import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateStateMachine } from "../model/UpdateStateMachine";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateStateMachineInput } from "../types/UpdateStateMachineInput";
import { UpdateStateMachineOutput } from "../types/UpdateStateMachineOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/UpdateStateMachineInput";
export * from "../types/UpdateStateMachineOutput";
export * from "../types/UpdateStateMachineExceptionsUnion";

export class UpdateStateMachineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateStateMachineInput,
      OutputTypesUnion,
      UpdateStateMachineOutput,
      SFNResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateStateMachine;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateStateMachineInput,
    UpdateStateMachineOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateStateMachineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateStateMachineInput,
    UpdateStateMachineOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateStateMachineInput, UpdateStateMachineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
