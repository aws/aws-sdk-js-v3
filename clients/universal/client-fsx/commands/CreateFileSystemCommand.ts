import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateFileSystem } from "../model/CreateFileSystem";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFileSystemInput } from "../types/CreateFileSystemInput";
import { CreateFileSystemOutput } from "../types/CreateFileSystemOutput";
import { FSxResolvedConfiguration } from "../FSxConfiguration";
export * from "../types/CreateFileSystemInput";
export * from "../types/CreateFileSystemOutput";
export * from "../types/CreateFileSystemExceptionsUnion";

export class CreateFileSystemCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFileSystemInput,
      OutputTypesUnion,
      CreateFileSystemOutput,
      FSxResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateFileSystem;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFileSystemInput,
    CreateFileSystemOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateFileSystemInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: FSxResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateFileSystemInput, CreateFileSystemOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateFileSystemInput, CreateFileSystemOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
