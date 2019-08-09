import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteConfigurationSetTrackingOptions } from "../model/DeleteConfigurationSetTrackingOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteConfigurationSetTrackingOptionsInput } from "../types/DeleteConfigurationSetTrackingOptionsInput";
import { DeleteConfigurationSetTrackingOptionsOutput } from "../types/DeleteConfigurationSetTrackingOptionsOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/DeleteConfigurationSetTrackingOptionsInput";
export * from "../types/DeleteConfigurationSetTrackingOptionsOutput";
export * from "../types/DeleteConfigurationSetTrackingOptionsExceptionsUnion";

export class DeleteConfigurationSetTrackingOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteConfigurationSetTrackingOptionsInput,
      OutputTypesUnion,
      DeleteConfigurationSetTrackingOptionsOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteConfigurationSetTrackingOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteConfigurationSetTrackingOptionsInput,
    DeleteConfigurationSetTrackingOptionsOutput,
    Blob
  >();

  constructor(readonly input: DeleteConfigurationSetTrackingOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteConfigurationSetTrackingOptionsInput,
    DeleteConfigurationSetTrackingOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteConfigurationSetTrackingOptionsInput,
        DeleteConfigurationSetTrackingOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
