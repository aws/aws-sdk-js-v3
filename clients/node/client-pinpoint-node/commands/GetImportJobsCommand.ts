import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetImportJobs } from "../model/GetImportJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetImportJobsInput } from "../types/GetImportJobsInput";
import { GetImportJobsOutput } from "../types/GetImportJobsOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetImportJobsInput";
export * from "../types/GetImportJobsOutput";
export * from "../types/GetImportJobsExceptionsUnion";

export class GetImportJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetImportJobsInput,
      OutputTypesUnion,
      GetImportJobsOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetImportJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetImportJobsInput,
    GetImportJobsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetImportJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetImportJobsInput, GetImportJobsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetImportJobsInput, GetImportJobsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
