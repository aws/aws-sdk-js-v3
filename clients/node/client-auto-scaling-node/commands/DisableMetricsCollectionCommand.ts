import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisableMetricsCollection } from "../model/operations/DisableMetricsCollection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableMetricsCollectionInput } from "../types/DisableMetricsCollectionInput";
import { DisableMetricsCollectionOutput } from "../types/DisableMetricsCollectionOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DisableMetricsCollectionInput";
export * from "../types/DisableMetricsCollectionOutput";
export * from "../types/DisableMetricsCollectionExceptionsUnion";

export class DisableMetricsCollectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableMetricsCollectionInput,
      OutputTypesUnion,
      DisableMetricsCollectionOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisableMetricsCollection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableMetricsCollectionInput,
    DisableMetricsCollectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisableMetricsCollectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableMetricsCollectionInput,
    DisableMetricsCollectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableMetricsCollectionInput, DisableMetricsCollectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
