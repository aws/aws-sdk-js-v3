import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateCoreDefinitionVersion } from "../model/CreateCoreDefinitionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCoreDefinitionVersionInput } from "../types/CreateCoreDefinitionVersionInput";
import { CreateCoreDefinitionVersionOutput } from "../types/CreateCoreDefinitionVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateCoreDefinitionVersionInput";
export * from "../types/CreateCoreDefinitionVersionOutput";
export * from "../types/CreateCoreDefinitionVersionExceptionsUnion";

export class CreateCoreDefinitionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCoreDefinitionVersionInput,
      OutputTypesUnion,
      CreateCoreDefinitionVersionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = CreateCoreDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCoreDefinitionVersionInput,
    CreateCoreDefinitionVersionOutput,
    Blob
  >();

  constructor(readonly input: CreateCoreDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCoreDefinitionVersionInput,
    CreateCoreDefinitionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateCoreDefinitionVersionInput,
        CreateCoreDefinitionVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
