import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateHsmConfiguration } from "../model/CreateHsmConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateHsmConfigurationInput } from "../types/CreateHsmConfigurationInput";
import { CreateHsmConfigurationOutput } from "../types/CreateHsmConfigurationOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/CreateHsmConfigurationInput";
export * from "../types/CreateHsmConfigurationOutput";
export * from "../types/CreateHsmConfigurationExceptionsUnion";

export class CreateHsmConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateHsmConfigurationInput,
      OutputTypesUnion,
      CreateHsmConfigurationOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateHsmConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateHsmConfigurationInput,
    CreateHsmConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateHsmConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateHsmConfigurationInput,
    CreateHsmConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateHsmConfigurationInput, CreateHsmConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
