import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateConfiguration } from "../model/operations/UpdateConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateConfigurationInput } from "../types/UpdateConfigurationInput";
import { UpdateConfigurationOutput } from "../types/UpdateConfigurationOutput";
import { mqResolvedConfiguration } from "../mqConfiguration";
export * from "../types/UpdateConfigurationInput";
export * from "../types/UpdateConfigurationOutput";
export * from "../types/UpdateConfigurationExceptionsUnion";

export class UpdateConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateConfigurationInput,
      OutputTypesUnion,
      UpdateConfigurationOutput,
      mqResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateConfigurationInput,
    UpdateConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: mqResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateConfigurationInput,
    UpdateConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateConfigurationInput, UpdateConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
