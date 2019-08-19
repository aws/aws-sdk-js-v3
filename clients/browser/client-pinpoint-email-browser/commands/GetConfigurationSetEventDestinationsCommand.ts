import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetConfigurationSetEventDestinations } from "../model/operations/GetConfigurationSetEventDestinations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetConfigurationSetEventDestinationsInput } from "../types/GetConfigurationSetEventDestinationsInput";
import { GetConfigurationSetEventDestinationsOutput } from "../types/GetConfigurationSetEventDestinationsOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/GetConfigurationSetEventDestinationsInput";
export * from "../types/GetConfigurationSetEventDestinationsOutput";
export * from "../types/GetConfigurationSetEventDestinationsExceptionsUnion";

export class GetConfigurationSetEventDestinationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetConfigurationSetEventDestinationsInput,
      OutputTypesUnion,
      GetConfigurationSetEventDestinationsOutput,
      PinpointEmailResolvedConfiguration,
      Blob
    > {
  readonly model = GetConfigurationSetEventDestinations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetConfigurationSetEventDestinationsInput,
    GetConfigurationSetEventDestinationsOutput,
    Blob
  >();

  constructor(readonly input: GetConfigurationSetEventDestinationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetConfigurationSetEventDestinationsInput,
    GetConfigurationSetEventDestinationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetConfigurationSetEventDestinationsInput,
        GetConfigurationSetEventDestinationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
