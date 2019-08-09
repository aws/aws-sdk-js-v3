import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateResourceDefinitionVersion } from "../model/CreateResourceDefinitionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateResourceDefinitionVersionInput } from "../types/CreateResourceDefinitionVersionInput";
import { CreateResourceDefinitionVersionOutput } from "../types/CreateResourceDefinitionVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateResourceDefinitionVersionInput";
export * from "../types/CreateResourceDefinitionVersionOutput";
export * from "../types/CreateResourceDefinitionVersionExceptionsUnion";

export class CreateResourceDefinitionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateResourceDefinitionVersionInput,
      OutputTypesUnion,
      CreateResourceDefinitionVersionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateResourceDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateResourceDefinitionVersionInput,
    CreateResourceDefinitionVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateResourceDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateResourceDefinitionVersionInput,
    CreateResourceDefinitionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateResourceDefinitionVersionInput,
        CreateResourceDefinitionVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
