import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateConfigurationSetTrackingOptions } from "../model/operations/UpdateConfigurationSetTrackingOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateConfigurationSetTrackingOptionsInput } from "../types/UpdateConfigurationSetTrackingOptionsInput";
import { UpdateConfigurationSetTrackingOptionsOutput } from "../types/UpdateConfigurationSetTrackingOptionsOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/UpdateConfigurationSetTrackingOptionsInput";
export * from "../types/UpdateConfigurationSetTrackingOptionsOutput";
export * from "../types/UpdateConfigurationSetTrackingOptionsExceptionsUnion";

export class UpdateConfigurationSetTrackingOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateConfigurationSetTrackingOptionsInput,
      OutputTypesUnion,
      UpdateConfigurationSetTrackingOptionsOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateConfigurationSetTrackingOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateConfigurationSetTrackingOptionsInput,
    UpdateConfigurationSetTrackingOptionsOutput,
    Blob
  >();

  constructor(readonly input: UpdateConfigurationSetTrackingOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateConfigurationSetTrackingOptionsInput,
    UpdateConfigurationSetTrackingOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateConfigurationSetTrackingOptionsInput,
        UpdateConfigurationSetTrackingOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
