import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateConfigurationSet } from "../model/CreateConfigurationSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateConfigurationSetInput } from "../types/CreateConfigurationSetInput";
import { CreateConfigurationSetOutput } from "../types/CreateConfigurationSetOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/CreateConfigurationSetInput";
export * from "../types/CreateConfigurationSetOutput";
export * from "../types/CreateConfigurationSetExceptionsUnion";

export class CreateConfigurationSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateConfigurationSetInput,
      OutputTypesUnion,
      CreateConfigurationSetOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = CreateConfigurationSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateConfigurationSetInput,
    CreateConfigurationSetOutput,
    Blob
  >();

  constructor(readonly input: CreateConfigurationSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateConfigurationSetInput,
    CreateConfigurationSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateConfigurationSetInput, CreateConfigurationSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
