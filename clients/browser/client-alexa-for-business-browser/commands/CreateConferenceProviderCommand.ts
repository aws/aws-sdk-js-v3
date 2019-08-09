import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateConferenceProvider } from "../model/CreateConferenceProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateConferenceProviderInput } from "../types/CreateConferenceProviderInput";
import { CreateConferenceProviderOutput } from "../types/CreateConferenceProviderOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/CreateConferenceProviderInput";
export * from "../types/CreateConferenceProviderOutput";
export * from "../types/CreateConferenceProviderExceptionsUnion";

export class CreateConferenceProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateConferenceProviderInput,
      OutputTypesUnion,
      CreateConferenceProviderOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = CreateConferenceProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateConferenceProviderInput,
    CreateConferenceProviderOutput,
    Blob
  >();

  constructor(readonly input: CreateConferenceProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateConferenceProviderInput,
    CreateConferenceProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateConferenceProviderInput, CreateConferenceProviderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
