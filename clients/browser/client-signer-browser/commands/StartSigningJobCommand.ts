import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartSigningJob } from "../model/StartSigningJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartSigningJobInput } from "../types/StartSigningJobInput";
import { StartSigningJobOutput } from "../types/StartSigningJobOutput";
import { signerResolvedConfiguration } from "../signerConfiguration";
export * from "../types/StartSigningJobInput";
export * from "../types/StartSigningJobOutput";
export * from "../types/StartSigningJobExceptionsUnion";

export class StartSigningJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartSigningJobInput,
      OutputTypesUnion,
      StartSigningJobOutput,
      signerResolvedConfiguration,
      Blob
    > {
  readonly model = StartSigningJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartSigningJobInput,
    StartSigningJobOutput,
    Blob
  >();

  constructor(readonly input: StartSigningJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: signerResolvedConfiguration
  ): __aws_sdk_types.Handler<StartSigningJobInput, StartSigningJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartSigningJobInput, StartSigningJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
