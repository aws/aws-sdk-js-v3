import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSegmentExportJobs } from "../model/GetSegmentExportJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSegmentExportJobsInput } from "../types/GetSegmentExportJobsInput";
import { GetSegmentExportJobsOutput } from "../types/GetSegmentExportJobsOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetSegmentExportJobsInput";
export * from "../types/GetSegmentExportJobsOutput";
export * from "../types/GetSegmentExportJobsExceptionsUnion";

export class GetSegmentExportJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSegmentExportJobsInput,
      OutputTypesUnion,
      GetSegmentExportJobsOutput,
      PinpointResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetSegmentExportJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSegmentExportJobsInput,
    GetSegmentExportJobsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetSegmentExportJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSegmentExportJobsInput,
    GetSegmentExportJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSegmentExportJobsInput, GetSegmentExportJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
