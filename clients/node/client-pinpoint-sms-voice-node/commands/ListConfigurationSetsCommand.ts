import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListConfigurationSets } from "../model/operations/ListConfigurationSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListConfigurationSetsInput } from "../types/ListConfigurationSetsInput";
import { ListConfigurationSetsOutput } from "../types/ListConfigurationSetsOutput";
import { PinpointSMSVoiceResolvedConfiguration } from "../PinpointSMSVoiceConfiguration";
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
      PinpointSMSVoiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListConfigurationSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListConfigurationSetsInput,
    ListConfigurationSetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListConfigurationSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointSMSVoiceResolvedConfiguration
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
