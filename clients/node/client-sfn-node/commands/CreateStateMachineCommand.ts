import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateStateMachine } from "../model/CreateStateMachine";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateStateMachineInput } from "../types/CreateStateMachineInput";
import { CreateStateMachineOutput } from "../types/CreateStateMachineOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/CreateStateMachineInput";
export * from "../types/CreateStateMachineOutput";
export * from "../types/CreateStateMachineExceptionsUnion";

export class CreateStateMachineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateStateMachineInput,
      OutputTypesUnion,
      CreateStateMachineOutput,
      SFNResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateStateMachine;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateStateMachineInput,
    CreateStateMachineOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateStateMachineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateStateMachineInput,
    CreateStateMachineOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateStateMachineInput, CreateStateMachineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
