import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutConferencePreference } from "../model/operations/PutConferencePreference";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutConferencePreferenceInput } from "../types/PutConferencePreferenceInput";
import { PutConferencePreferenceOutput } from "../types/PutConferencePreferenceOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/PutConferencePreferenceInput";
export * from "../types/PutConferencePreferenceOutput";
export * from "../types/PutConferencePreferenceExceptionsUnion";

export class PutConferencePreferenceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutConferencePreferenceInput,
      OutputTypesUnion,
      PutConferencePreferenceOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutConferencePreference;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutConferencePreferenceInput,
    PutConferencePreferenceOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutConferencePreferenceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutConferencePreferenceInput,
    PutConferencePreferenceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutConferencePreferenceInput, PutConferencePreferenceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
