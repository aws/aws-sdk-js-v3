import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetConferenceProvider } from "../model/GetConferenceProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetConferenceProviderInput } from "../types/GetConferenceProviderInput";
import { GetConferenceProviderOutput } from "../types/GetConferenceProviderOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/GetConferenceProviderInput";
export * from "../types/GetConferenceProviderOutput";
export * from "../types/GetConferenceProviderExceptionsUnion";

export class GetConferenceProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetConferenceProviderInput,
      OutputTypesUnion,
      GetConferenceProviderOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetConferenceProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetConferenceProviderInput,
    GetConferenceProviderOutput,
    Uint8Array
  >();

  constructor(readonly input: GetConferenceProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetConferenceProviderInput,
    GetConferenceProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetConferenceProviderInput, GetConferenceProviderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
