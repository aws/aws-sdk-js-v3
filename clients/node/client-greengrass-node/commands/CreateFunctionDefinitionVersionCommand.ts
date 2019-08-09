import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateFunctionDefinitionVersion } from "../model/CreateFunctionDefinitionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFunctionDefinitionVersionInput } from "../types/CreateFunctionDefinitionVersionInput";
import { CreateFunctionDefinitionVersionOutput } from "../types/CreateFunctionDefinitionVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateFunctionDefinitionVersionInput";
export * from "../types/CreateFunctionDefinitionVersionOutput";
export * from "../types/CreateFunctionDefinitionVersionExceptionsUnion";

export class CreateFunctionDefinitionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFunctionDefinitionVersionInput,
      OutputTypesUnion,
      CreateFunctionDefinitionVersionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateFunctionDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFunctionDefinitionVersionInput,
    CreateFunctionDefinitionVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateFunctionDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateFunctionDefinitionVersionInput,
    CreateFunctionDefinitionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateFunctionDefinitionVersionInput,
        CreateFunctionDefinitionVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
