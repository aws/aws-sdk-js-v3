import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDirectory } from "../model/CreateDirectory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDirectoryInput } from "../types/CreateDirectoryInput";
import { CreateDirectoryOutput } from "../types/CreateDirectoryOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/CreateDirectoryInput";
export * from "../types/CreateDirectoryOutput";
export * from "../types/CreateDirectoryExceptionsUnion";

export class CreateDirectoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDirectoryInput,
      OutputTypesUnion,
      CreateDirectoryOutput,
      DirectoryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateDirectory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDirectoryInput,
    CreateDirectoryOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateDirectoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDirectoryInput, CreateDirectoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDirectoryInput, CreateDirectoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
