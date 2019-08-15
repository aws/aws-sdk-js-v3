import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDirectory } from "../model/operations/CreateDirectory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDirectoryInput } from "../types/CreateDirectoryInput";
import { CreateDirectoryOutput } from "../types/CreateDirectoryOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
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
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDirectory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDirectoryInput,
    CreateDirectoryOutput,
    Blob
  >();

  constructor(readonly input: CreateDirectoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
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
