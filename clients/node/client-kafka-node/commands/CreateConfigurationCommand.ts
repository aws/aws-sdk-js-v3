import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateConfiguration } from "../model/CreateConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateConfigurationInput } from "../types/CreateConfigurationInput";
import { CreateConfigurationOutput } from "../types/CreateConfigurationOutput";
import { KafkaResolvedConfiguration } from "../KafkaConfiguration";
export * from "../types/CreateConfigurationInput";
export * from "../types/CreateConfigurationOutput";
export * from "../types/CreateConfigurationExceptionsUnion";

export class CreateConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateConfigurationInput,
      OutputTypesUnion,
      CreateConfigurationOutput,
      KafkaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateConfigurationInput,
    CreateConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KafkaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateConfigurationInput,
    CreateConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateConfigurationInput, CreateConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
