import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutConfigurationAggregator } from "../model/operations/PutConfigurationAggregator";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutConfigurationAggregatorInput } from "../types/PutConfigurationAggregatorInput";
import { PutConfigurationAggregatorOutput } from "../types/PutConfigurationAggregatorOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/PutConfigurationAggregatorInput";
export * from "../types/PutConfigurationAggregatorOutput";
export * from "../types/PutConfigurationAggregatorExceptionsUnion";

export class PutConfigurationAggregatorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutConfigurationAggregatorInput,
      OutputTypesUnion,
      PutConfigurationAggregatorOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = PutConfigurationAggregator;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutConfigurationAggregatorInput,
    PutConfigurationAggregatorOutput,
    Blob
  >();

  constructor(readonly input: PutConfigurationAggregatorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutConfigurationAggregatorInput,
    PutConfigurationAggregatorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutConfigurationAggregatorInput,
        PutConfigurationAggregatorOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
