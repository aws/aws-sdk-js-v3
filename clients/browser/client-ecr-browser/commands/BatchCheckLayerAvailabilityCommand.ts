import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchCheckLayerAvailability } from "../model/operations/BatchCheckLayerAvailability";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchCheckLayerAvailabilityInput } from "../types/BatchCheckLayerAvailabilityInput";
import { BatchCheckLayerAvailabilityOutput } from "../types/BatchCheckLayerAvailabilityOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/BatchCheckLayerAvailabilityInput";
export * from "../types/BatchCheckLayerAvailabilityOutput";
export * from "../types/BatchCheckLayerAvailabilityExceptionsUnion";

export class BatchCheckLayerAvailabilityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchCheckLayerAvailabilityInput,
      OutputTypesUnion,
      BatchCheckLayerAvailabilityOutput,
      ECRResolvedConfiguration,
      Blob
    > {
  readonly model = BatchCheckLayerAvailability;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchCheckLayerAvailabilityInput,
    BatchCheckLayerAvailabilityOutput,
    Blob
  >();

  constructor(readonly input: BatchCheckLayerAvailabilityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchCheckLayerAvailabilityInput,
    BatchCheckLayerAvailabilityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchCheckLayerAvailabilityInput,
        BatchCheckLayerAvailabilityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
