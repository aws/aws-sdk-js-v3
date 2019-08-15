import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateConferenceProvider } from "../model/operations/UpdateConferenceProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateConferenceProviderInput } from "../types/UpdateConferenceProviderInput";
import { UpdateConferenceProviderOutput } from "../types/UpdateConferenceProviderOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/UpdateConferenceProviderInput";
export * from "../types/UpdateConferenceProviderOutput";
export * from "../types/UpdateConferenceProviderExceptionsUnion";

export class UpdateConferenceProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateConferenceProviderInput,
      OutputTypesUnion,
      UpdateConferenceProviderOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateConferenceProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateConferenceProviderInput,
    UpdateConferenceProviderOutput,
    Blob
  >();

  constructor(readonly input: UpdateConferenceProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateConferenceProviderInput,
    UpdateConferenceProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateConferenceProviderInput, UpdateConferenceProviderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
