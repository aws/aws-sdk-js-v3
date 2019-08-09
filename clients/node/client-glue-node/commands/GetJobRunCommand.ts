import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetJobRun } from "../model/GetJobRun";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetJobRunInput } from "../types/GetJobRunInput";
import { GetJobRunOutput } from "../types/GetJobRunOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetJobRunInput";
export * from "../types/GetJobRunOutput";
export * from "../types/GetJobRunExceptionsUnion";

export class GetJobRunCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetJobRunInput,
      OutputTypesUnion,
      GetJobRunOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetJobRun;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetJobRunInput,
    GetJobRunOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetJobRunInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetJobRunInput, GetJobRunOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetJobRunInput, GetJobRunOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
