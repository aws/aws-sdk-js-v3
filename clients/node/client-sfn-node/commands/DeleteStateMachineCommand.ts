import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteStateMachine } from "../model/operations/DeleteStateMachine";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteStateMachineInput } from "../types/DeleteStateMachineInput";
import { DeleteStateMachineOutput } from "../types/DeleteStateMachineOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/DeleteStateMachineInput";
export * from "../types/DeleteStateMachineOutput";
export * from "../types/DeleteStateMachineExceptionsUnion";

export class DeleteStateMachineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteStateMachineInput,
      OutputTypesUnion,
      DeleteStateMachineOutput,
      SFNResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteStateMachine;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteStateMachineInput,
    DeleteStateMachineOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteStateMachineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteStateMachineInput,
    DeleteStateMachineOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteStateMachineInput, DeleteStateMachineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
