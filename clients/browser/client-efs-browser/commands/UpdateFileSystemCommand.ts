import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateFileSystem } from "../model/operations/UpdateFileSystem";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFileSystemInput } from "../types/UpdateFileSystemInput";
import { UpdateFileSystemOutput } from "../types/UpdateFileSystemOutput";
import { EFSResolvedConfiguration } from "../EFSConfiguration";
export * from "../types/UpdateFileSystemInput";
export * from "../types/UpdateFileSystemOutput";
export * from "../types/UpdateFileSystemExceptionsUnion";

export class UpdateFileSystemCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFileSystemInput,
      OutputTypesUnion,
      UpdateFileSystemOutput,
      EFSResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateFileSystem;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFileSystemInput,
    UpdateFileSystemOutput,
    Blob
  >();

  constructor(readonly input: UpdateFileSystemInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EFSResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateFileSystemInput, UpdateFileSystemOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFileSystemInput, UpdateFileSystemOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
