import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateJob } from "../model/operations/CreateJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateJobInput } from "../types/CreateJobInput";
import { CreateJobOutput } from "../types/CreateJobOutput";
import { ElasticTranscoderResolvedConfiguration } from "../ElasticTranscoderConfiguration";
export * from "../types/CreateJobInput";
export * from "../types/CreateJobOutput";
export * from "../types/CreateJobExceptionsUnion";

export class CreateJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateJobInput,
      OutputTypesUnion,
      CreateJobOutput,
      ElasticTranscoderResolvedConfiguration,
      Blob
    > {
  readonly model = CreateJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateJobInput,
    CreateJobOutput,
    Blob
  >();

  constructor(readonly input: CreateJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticTranscoderResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateJobInput, CreateJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateJobInput, CreateJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
