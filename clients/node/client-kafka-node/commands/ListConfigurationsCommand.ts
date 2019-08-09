import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListConfigurations } from "../model/ListConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListConfigurationsInput } from "../types/ListConfigurationsInput";
import { ListConfigurationsOutput } from "../types/ListConfigurationsOutput";
import { KafkaResolvedConfiguration } from "../KafkaConfiguration";
export * from "../types/ListConfigurationsInput";
export * from "../types/ListConfigurationsOutput";
export * from "../types/ListConfigurationsExceptionsUnion";

export class ListConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListConfigurationsInput,
      OutputTypesUnion,
      ListConfigurationsOutput,
      KafkaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListConfigurationsInput,
    ListConfigurationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KafkaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListConfigurationsInput,
    ListConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListConfigurationsInput, ListConfigurationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
