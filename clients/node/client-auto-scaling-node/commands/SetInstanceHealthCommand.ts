import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetInstanceHealth } from "../model/operations/SetInstanceHealth";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetInstanceHealthInput } from "../types/SetInstanceHealthInput";
import { SetInstanceHealthOutput } from "../types/SetInstanceHealthOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/SetInstanceHealthInput";
export * from "../types/SetInstanceHealthOutput";
export * from "../types/SetInstanceHealthExceptionsUnion";

export class SetInstanceHealthCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetInstanceHealthInput,
      OutputTypesUnion,
      SetInstanceHealthOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SetInstanceHealth;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetInstanceHealthInput,
    SetInstanceHealthOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetInstanceHealthInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<SetInstanceHealthInput, SetInstanceHealthOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetInstanceHealthInput, SetInstanceHealthOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
