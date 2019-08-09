import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListVoiceConnectors } from "../model/ListVoiceConnectors";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVoiceConnectorsInput } from "../types/ListVoiceConnectorsInput";
import { ListVoiceConnectorsOutput } from "../types/ListVoiceConnectorsOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/ListVoiceConnectorsInput";
export * from "../types/ListVoiceConnectorsOutput";
export * from "../types/ListVoiceConnectorsExceptionsUnion";

export class ListVoiceConnectorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVoiceConnectorsInput,
      OutputTypesUnion,
      ListVoiceConnectorsOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = ListVoiceConnectors;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVoiceConnectorsInput,
    ListVoiceConnectorsOutput,
    Blob
  >();

  constructor(readonly input: ListVoiceConnectorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListVoiceConnectorsInput,
    ListVoiceConnectorsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListVoiceConnectorsInput, ListVoiceConnectorsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
