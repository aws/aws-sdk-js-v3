import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopTransformJob } from "../model/StopTransformJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopTransformJobInput } from "../types/StopTransformJobInput";
import { StopTransformJobOutput } from "../types/StopTransformJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/StopTransformJobInput";
export * from "../types/StopTransformJobOutput";
export * from "../types/StopTransformJobExceptionsUnion";

export class StopTransformJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopTransformJobInput,
      OutputTypesUnion,
      StopTransformJobOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopTransformJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopTransformJobInput,
    StopTransformJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopTransformJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<StopTransformJobInput, StopTransformJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopTransformJobInput, StopTransformJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
