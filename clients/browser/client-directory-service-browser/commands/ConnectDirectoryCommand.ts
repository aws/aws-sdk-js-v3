import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ConnectDirectory } from "../model/operations/ConnectDirectory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ConnectDirectoryInput } from "../types/ConnectDirectoryInput";
import { ConnectDirectoryOutput } from "../types/ConnectDirectoryOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/ConnectDirectoryInput";
export * from "../types/ConnectDirectoryOutput";
export * from "../types/ConnectDirectoryExceptionsUnion";

export class ConnectDirectoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ConnectDirectoryInput,
      OutputTypesUnion,
      ConnectDirectoryOutput,
      DirectoryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = ConnectDirectory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ConnectDirectoryInput,
    ConnectDirectoryOutput,
    Blob
  >();

  constructor(readonly input: ConnectDirectoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<ConnectDirectoryInput, ConnectDirectoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ConnectDirectoryInput, ConnectDirectoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
