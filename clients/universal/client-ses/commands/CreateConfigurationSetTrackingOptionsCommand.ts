import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateConfigurationSetTrackingOptions } from "../model/CreateConfigurationSetTrackingOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateConfigurationSetTrackingOptionsInput } from "../types/CreateConfigurationSetTrackingOptionsInput";
import { CreateConfigurationSetTrackingOptionsOutput } from "../types/CreateConfigurationSetTrackingOptionsOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/CreateConfigurationSetTrackingOptionsInput";
export * from "../types/CreateConfigurationSetTrackingOptionsOutput";
export * from "../types/CreateConfigurationSetTrackingOptionsExceptionsUnion";

export class CreateConfigurationSetTrackingOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateConfigurationSetTrackingOptionsInput,
      OutputTypesUnion,
      CreateConfigurationSetTrackingOptionsOutput,
      SESResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateConfigurationSetTrackingOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateConfigurationSetTrackingOptionsInput,
    CreateConfigurationSetTrackingOptionsOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateConfigurationSetTrackingOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateConfigurationSetTrackingOptionsInput,
    CreateConfigurationSetTrackingOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateConfigurationSetTrackingOptionsInput,
        CreateConfigurationSetTrackingOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
