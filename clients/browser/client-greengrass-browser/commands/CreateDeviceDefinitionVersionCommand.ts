import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDeviceDefinitionVersion } from "../model/CreateDeviceDefinitionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDeviceDefinitionVersionInput } from "../types/CreateDeviceDefinitionVersionInput";
import { CreateDeviceDefinitionVersionOutput } from "../types/CreateDeviceDefinitionVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateDeviceDefinitionVersionInput";
export * from "../types/CreateDeviceDefinitionVersionOutput";
export * from "../types/CreateDeviceDefinitionVersionExceptionsUnion";

export class CreateDeviceDefinitionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDeviceDefinitionVersionInput,
      OutputTypesUnion,
      CreateDeviceDefinitionVersionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDeviceDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDeviceDefinitionVersionInput,
    CreateDeviceDefinitionVersionOutput,
    Blob
  >();

  constructor(readonly input: CreateDeviceDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDeviceDefinitionVersionInput,
    CreateDeviceDefinitionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateDeviceDefinitionVersionInput,
        CreateDeviceDefinitionVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
