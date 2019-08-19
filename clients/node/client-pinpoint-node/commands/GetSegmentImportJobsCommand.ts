import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSegmentImportJobs } from "../model/operations/GetSegmentImportJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSegmentImportJobsInput } from "../types/GetSegmentImportJobsInput";
import { GetSegmentImportJobsOutput } from "../types/GetSegmentImportJobsOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetSegmentImportJobsInput";
export * from "../types/GetSegmentImportJobsOutput";
export * from "../types/GetSegmentImportJobsExceptionsUnion";

export class GetSegmentImportJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSegmentImportJobsInput,
      OutputTypesUnion,
      GetSegmentImportJobsOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSegmentImportJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSegmentImportJobsInput,
    GetSegmentImportJobsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSegmentImportJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSegmentImportJobsInput,
    GetSegmentImportJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSegmentImportJobsInput, GetSegmentImportJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
