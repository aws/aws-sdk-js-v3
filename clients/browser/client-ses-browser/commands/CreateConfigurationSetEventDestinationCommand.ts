import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateConfigurationSetEventDestination } from "../model/operations/CreateConfigurationSetEventDestination";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateConfigurationSetEventDestinationInput } from "../types/CreateConfigurationSetEventDestinationInput";
import { CreateConfigurationSetEventDestinationOutput } from "../types/CreateConfigurationSetEventDestinationOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/CreateConfigurationSetEventDestinationInput";
export * from "../types/CreateConfigurationSetEventDestinationOutput";
export * from "../types/CreateConfigurationSetEventDestinationExceptionsUnion";

export class CreateConfigurationSetEventDestinationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateConfigurationSetEventDestinationInput,
      OutputTypesUnion,
      CreateConfigurationSetEventDestinationOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = CreateConfigurationSetEventDestination;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateConfigurationSetEventDestinationInput,
    CreateConfigurationSetEventDestinationOutput,
    Blob
  >();

  constructor(readonly input: CreateConfigurationSetEventDestinationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateConfigurationSetEventDestinationInput,
    CreateConfigurationSetEventDestinationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateConfigurationSetEventDestinationInput,
        CreateConfigurationSetEventDestinationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
