import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchGetApplicationRevisions } from "../model/BatchGetApplicationRevisions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetApplicationRevisionsInput } from "../types/BatchGetApplicationRevisionsInput";
import { BatchGetApplicationRevisionsOutput } from "../types/BatchGetApplicationRevisionsOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/BatchGetApplicationRevisionsInput";
export * from "../types/BatchGetApplicationRevisionsOutput";
export * from "../types/BatchGetApplicationRevisionsExceptionsUnion";

export class BatchGetApplicationRevisionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetApplicationRevisionsInput,
      OutputTypesUnion,
      BatchGetApplicationRevisionsOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchGetApplicationRevisions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetApplicationRevisionsInput,
    BatchGetApplicationRevisionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchGetApplicationRevisionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchGetApplicationRevisionsInput,
    BatchGetApplicationRevisionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchGetApplicationRevisionsInput,
        BatchGetApplicationRevisionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
