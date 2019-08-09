import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateLabelingJob } from "../model/CreateLabelingJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLabelingJobInput } from "../types/CreateLabelingJobInput";
import { CreateLabelingJobOutput } from "../types/CreateLabelingJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/CreateLabelingJobInput";
export * from "../types/CreateLabelingJobOutput";
export * from "../types/CreateLabelingJobExceptionsUnion";

export class CreateLabelingJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLabelingJobInput,
      OutputTypesUnion,
      CreateLabelingJobOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateLabelingJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLabelingJobInput,
    CreateLabelingJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateLabelingJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateLabelingJobInput, CreateLabelingJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLabelingJobInput, CreateLabelingJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
