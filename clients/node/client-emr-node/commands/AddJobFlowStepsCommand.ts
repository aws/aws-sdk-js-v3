import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddJobFlowSteps } from "../model/AddJobFlowSteps";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddJobFlowStepsInput } from "../types/AddJobFlowStepsInput";
import { AddJobFlowStepsOutput } from "../types/AddJobFlowStepsOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/AddJobFlowStepsInput";
export * from "../types/AddJobFlowStepsOutput";
export * from "../types/AddJobFlowStepsExceptionsUnion";

export class AddJobFlowStepsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddJobFlowStepsInput,
      OutputTypesUnion,
      AddJobFlowStepsOutput,
      EMRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddJobFlowSteps;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddJobFlowStepsInput,
    AddJobFlowStepsOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddJobFlowStepsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<AddJobFlowStepsInput, AddJobFlowStepsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddJobFlowStepsInput, AddJobFlowStepsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
