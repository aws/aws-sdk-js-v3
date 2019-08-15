import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetReplicationJobs } from "../model/operations/GetReplicationJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetReplicationJobsInput } from "../types/GetReplicationJobsInput";
import { GetReplicationJobsOutput } from "../types/GetReplicationJobsOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/GetReplicationJobsInput";
export * from "../types/GetReplicationJobsOutput";
export * from "../types/GetReplicationJobsExceptionsUnion";

export class GetReplicationJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetReplicationJobsInput,
      OutputTypesUnion,
      GetReplicationJobsOutput,
      SMSResolvedConfiguration,
      Blob
    > {
  readonly model = GetReplicationJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetReplicationJobsInput,
    GetReplicationJobsOutput,
    Blob
  >();

  constructor(readonly input: GetReplicationJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetReplicationJobsInput,
    GetReplicationJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetReplicationJobsInput, GetReplicationJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
