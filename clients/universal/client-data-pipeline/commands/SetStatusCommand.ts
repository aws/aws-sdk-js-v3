import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetStatus } from "../model/SetStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetStatusInput } from "../types/SetStatusInput";
import { SetStatusOutput } from "../types/SetStatusOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/SetStatusInput";
export * from "../types/SetStatusOutput";
export * from "../types/SetStatusExceptionsUnion";

export class SetStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetStatusInput,
      OutputTypesUnion,
      SetStatusOutput,
      DataPipelineResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SetStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetStatusInput,
    SetStatusOutput,
    Uint8Array
  >();

  constructor(readonly input: SetStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<SetStatusInput, SetStatusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetStatusInput, SetStatusOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
