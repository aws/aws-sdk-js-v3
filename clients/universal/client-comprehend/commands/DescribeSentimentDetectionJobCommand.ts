import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSentimentDetectionJob } from "../model/DescribeSentimentDetectionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSentimentDetectionJobInput } from "../types/DescribeSentimentDetectionJobInput";
import { DescribeSentimentDetectionJobOutput } from "../types/DescribeSentimentDetectionJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/DescribeSentimentDetectionJobInput";
export * from "../types/DescribeSentimentDetectionJobOutput";
export * from "../types/DescribeSentimentDetectionJobExceptionsUnion";

export class DescribeSentimentDetectionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSentimentDetectionJobInput,
      OutputTypesUnion,
      DescribeSentimentDetectionJobOutput,
      ComprehendResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeSentimentDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSentimentDetectionJobInput,
    DescribeSentimentDetectionJobOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeSentimentDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSentimentDetectionJobInput,
    DescribeSentimentDetectionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeSentimentDetectionJobInput,
        DescribeSentimentDetectionJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
