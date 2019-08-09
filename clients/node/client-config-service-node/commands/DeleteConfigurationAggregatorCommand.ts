import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteConfigurationAggregator } from "../model/DeleteConfigurationAggregator";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteConfigurationAggregatorInput } from "../types/DeleteConfigurationAggregatorInput";
import { DeleteConfigurationAggregatorOutput } from "../types/DeleteConfigurationAggregatorOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DeleteConfigurationAggregatorInput";
export * from "../types/DeleteConfigurationAggregatorOutput";
export * from "../types/DeleteConfigurationAggregatorExceptionsUnion";

export class DeleteConfigurationAggregatorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteConfigurationAggregatorInput,
      OutputTypesUnion,
      DeleteConfigurationAggregatorOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteConfigurationAggregator;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteConfigurationAggregatorInput,
    DeleteConfigurationAggregatorOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteConfigurationAggregatorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteConfigurationAggregatorInput,
    DeleteConfigurationAggregatorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteConfigurationAggregatorInput,
        DeleteConfigurationAggregatorOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
