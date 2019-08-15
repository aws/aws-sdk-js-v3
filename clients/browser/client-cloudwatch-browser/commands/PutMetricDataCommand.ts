import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutMetricData } from "../model/operations/PutMetricData";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutMetricDataInput } from "../types/PutMetricDataInput";
import { PutMetricDataOutput } from "../types/PutMetricDataOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/PutMetricDataInput";
export * from "../types/PutMetricDataOutput";
export * from "../types/PutMetricDataExceptionsUnion";

export class PutMetricDataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutMetricDataInput,
      OutputTypesUnion,
      PutMetricDataOutput,
      CloudWatchResolvedConfiguration,
      Blob
    > {
  readonly model = PutMetricData;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutMetricDataInput,
    PutMetricDataOutput,
    Blob
  >();

  constructor(readonly input: PutMetricDataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<PutMetricDataInput, PutMetricDataOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutMetricDataInput, PutMetricDataOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
