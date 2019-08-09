import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AcceptSharedDirectory } from "../model/AcceptSharedDirectory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptSharedDirectoryInput } from "../types/AcceptSharedDirectoryInput";
import { AcceptSharedDirectoryOutput } from "../types/AcceptSharedDirectoryOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/AcceptSharedDirectoryInput";
export * from "../types/AcceptSharedDirectoryOutput";
export * from "../types/AcceptSharedDirectoryExceptionsUnion";

export class AcceptSharedDirectoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcceptSharedDirectoryInput,
      OutputTypesUnion,
      AcceptSharedDirectoryOutput,
      DirectoryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AcceptSharedDirectory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptSharedDirectoryInput,
    AcceptSharedDirectoryOutput,
    Uint8Array
  >();

  constructor(readonly input: AcceptSharedDirectoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AcceptSharedDirectoryInput,
    AcceptSharedDirectoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AcceptSharedDirectoryInput, AcceptSharedDirectoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
