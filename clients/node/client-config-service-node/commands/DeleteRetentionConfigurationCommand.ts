import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteRetentionConfiguration } from "../model/operations/DeleteRetentionConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRetentionConfigurationInput } from "../types/DeleteRetentionConfigurationInput";
import { DeleteRetentionConfigurationOutput } from "../types/DeleteRetentionConfigurationOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DeleteRetentionConfigurationInput";
export * from "../types/DeleteRetentionConfigurationOutput";
export * from "../types/DeleteRetentionConfigurationExceptionsUnion";

export class DeleteRetentionConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRetentionConfigurationInput,
      OutputTypesUnion,
      DeleteRetentionConfigurationOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteRetentionConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRetentionConfigurationInput,
    DeleteRetentionConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteRetentionConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRetentionConfigurationInput,
    DeleteRetentionConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteRetentionConfigurationInput,
        DeleteRetentionConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
