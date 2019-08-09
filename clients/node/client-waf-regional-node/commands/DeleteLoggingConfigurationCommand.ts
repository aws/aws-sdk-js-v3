import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLoggingConfiguration } from "../model/DeleteLoggingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLoggingConfigurationInput } from "../types/DeleteLoggingConfigurationInput";
import { DeleteLoggingConfigurationOutput } from "../types/DeleteLoggingConfigurationOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/DeleteLoggingConfigurationInput";
export * from "../types/DeleteLoggingConfigurationOutput";
export * from "../types/DeleteLoggingConfigurationExceptionsUnion";

export class DeleteLoggingConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLoggingConfigurationInput,
      OutputTypesUnion,
      DeleteLoggingConfigurationOutput,
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteLoggingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLoggingConfigurationInput,
    DeleteLoggingConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLoggingConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLoggingConfigurationInput,
    DeleteLoggingConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteLoggingConfigurationInput,
        DeleteLoggingConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
