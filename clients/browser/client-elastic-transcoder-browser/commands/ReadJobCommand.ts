import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ReadJob } from "../model/operations/ReadJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReadJobInput } from "../types/ReadJobInput";
import { ReadJobOutput } from "../types/ReadJobOutput";
import { ElasticTranscoderResolvedConfiguration } from "../ElasticTranscoderConfiguration";
export * from "../types/ReadJobInput";
export * from "../types/ReadJobOutput";
export * from "../types/ReadJobExceptionsUnion";

export class ReadJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReadJobInput,
      OutputTypesUnion,
      ReadJobOutput,
      ElasticTranscoderResolvedConfiguration,
      Blob
    > {
  readonly model = ReadJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReadJobInput,
    ReadJobOutput,
    Blob
  >();

  constructor(readonly input: ReadJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticTranscoderResolvedConfiguration
  ): __aws_sdk_types.Handler<ReadJobInput, ReadJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReadJobInput, ReadJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
