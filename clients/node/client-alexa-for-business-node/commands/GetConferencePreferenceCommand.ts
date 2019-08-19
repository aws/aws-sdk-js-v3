import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetConferencePreference } from "../model/operations/GetConferencePreference";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetConferencePreferenceInput } from "../types/GetConferencePreferenceInput";
import { GetConferencePreferenceOutput } from "../types/GetConferencePreferenceOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/GetConferencePreferenceInput";
export * from "../types/GetConferencePreferenceOutput";
export * from "../types/GetConferencePreferenceExceptionsUnion";

export class GetConferencePreferenceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetConferencePreferenceInput,
      OutputTypesUnion,
      GetConferencePreferenceOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetConferencePreference;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetConferencePreferenceInput,
    GetConferencePreferenceOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetConferencePreferenceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetConferencePreferenceInput,
    GetConferencePreferenceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetConferencePreferenceInput, GetConferencePreferenceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
