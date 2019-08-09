import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListConfigurationSets } from "../model/ListConfigurationSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListConfigurationSetsInput } from "../types/ListConfigurationSetsInput";
import { ListConfigurationSetsOutput } from "../types/ListConfigurationSetsOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/ListConfigurationSetsInput";
export * from "../types/ListConfigurationSetsOutput";
export * from "../types/ListConfigurationSetsExceptionsUnion";

export class ListConfigurationSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListConfigurationSetsInput,
      OutputTypesUnion,
      ListConfigurationSetsOutput,
      PinpointEmailResolvedConfiguration,
      Blob
    > {
  readonly model = ListConfigurationSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListConfigurationSetsInput,
    ListConfigurationSetsOutput,
    Blob
  >();

  constructor(readonly input: ListConfigurationSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListConfigurationSetsInput,
    ListConfigurationSetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListConfigurationSetsInput, ListConfigurationSetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
