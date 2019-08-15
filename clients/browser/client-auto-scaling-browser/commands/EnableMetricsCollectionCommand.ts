import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableMetricsCollection } from "../model/operations/EnableMetricsCollection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableMetricsCollectionInput } from "../types/EnableMetricsCollectionInput";
import { EnableMetricsCollectionOutput } from "../types/EnableMetricsCollectionOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/EnableMetricsCollectionInput";
export * from "../types/EnableMetricsCollectionOutput";
export * from "../types/EnableMetricsCollectionExceptionsUnion";

export class EnableMetricsCollectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableMetricsCollectionInput,
      OutputTypesUnion,
      EnableMetricsCollectionOutput,
      AutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = EnableMetricsCollection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableMetricsCollectionInput,
    EnableMetricsCollectionOutput,
    Blob
  >();

  constructor(readonly input: EnableMetricsCollectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableMetricsCollectionInput,
    EnableMetricsCollectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableMetricsCollectionInput, EnableMetricsCollectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
