import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchGetApplications } from "../model/operations/BatchGetApplications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetApplicationsInput } from "../types/BatchGetApplicationsInput";
import { BatchGetApplicationsOutput } from "../types/BatchGetApplicationsOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/BatchGetApplicationsInput";
export * from "../types/BatchGetApplicationsOutput";
export * from "../types/BatchGetApplicationsExceptionsUnion";

export class BatchGetApplicationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetApplicationsInput,
      OutputTypesUnion,
      BatchGetApplicationsOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchGetApplications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetApplicationsInput,
    BatchGetApplicationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchGetApplicationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchGetApplicationsInput,
    BatchGetApplicationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetApplicationsInput, BatchGetApplicationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
