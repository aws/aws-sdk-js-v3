import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateIndex } from "../model/operations/CreateIndex";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateIndexInput } from "../types/CreateIndexInput";
import { CreateIndexOutput } from "../types/CreateIndexOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/CreateIndexInput";
export * from "../types/CreateIndexOutput";
export * from "../types/CreateIndexExceptionsUnion";

export class CreateIndexCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateIndexInput,
      OutputTypesUnion,
      CreateIndexOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = CreateIndex;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateIndexInput,
    CreateIndexOutput,
    Blob
  >();

  constructor(readonly input: CreateIndexInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateIndexInput, CreateIndexOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateIndexInput, CreateIndexOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
