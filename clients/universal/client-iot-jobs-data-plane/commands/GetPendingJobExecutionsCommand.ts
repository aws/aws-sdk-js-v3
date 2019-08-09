import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPendingJobExecutions } from "../model/GetPendingJobExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPendingJobExecutionsInput } from "../types/GetPendingJobExecutionsInput";
import { GetPendingJobExecutionsOutput } from "../types/GetPendingJobExecutionsOutput";
import { IoTJobsDataPlaneResolvedConfiguration } from "../IoTJobsDataPlaneConfiguration";
export * from "../types/GetPendingJobExecutionsInput";
export * from "../types/GetPendingJobExecutionsOutput";
export * from "../types/GetPendingJobExecutionsExceptionsUnion";

export class GetPendingJobExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPendingJobExecutionsInput,
      OutputTypesUnion,
      GetPendingJobExecutionsOutput,
      IoTJobsDataPlaneResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetPendingJobExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPendingJobExecutionsInput,
    GetPendingJobExecutionsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetPendingJobExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTJobsDataPlaneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetPendingJobExecutionsInput,
    GetPendingJobExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPendingJobExecutionsInput, GetPendingJobExecutionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
