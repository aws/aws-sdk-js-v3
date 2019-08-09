import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateJobExecution } from "../model/UpdateJobExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateJobExecutionInput } from "../types/UpdateJobExecutionInput";
import { UpdateJobExecutionOutput } from "../types/UpdateJobExecutionOutput";
import { IoTJobsDataPlaneResolvedConfiguration } from "../IoTJobsDataPlaneConfiguration";
export * from "../types/UpdateJobExecutionInput";
export * from "../types/UpdateJobExecutionOutput";
export * from "../types/UpdateJobExecutionExceptionsUnion";

export class UpdateJobExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateJobExecutionInput,
      OutputTypesUnion,
      UpdateJobExecutionOutput,
      IoTJobsDataPlaneResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateJobExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateJobExecutionInput,
    UpdateJobExecutionOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateJobExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTJobsDataPlaneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateJobExecutionInput,
    UpdateJobExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateJobExecutionInput, UpdateJobExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
