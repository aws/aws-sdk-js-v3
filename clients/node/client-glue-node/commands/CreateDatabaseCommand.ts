import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDatabase } from "../model/operations/CreateDatabase";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDatabaseInput } from "../types/CreateDatabaseInput";
import { CreateDatabaseOutput } from "../types/CreateDatabaseOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/CreateDatabaseInput";
export * from "../types/CreateDatabaseOutput";
export * from "../types/CreateDatabaseExceptionsUnion";

export class CreateDatabaseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDatabaseInput,
      OutputTypesUnion,
      CreateDatabaseOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDatabase;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDatabaseInput,
    CreateDatabaseOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDatabaseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDatabaseInput, CreateDatabaseOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDatabaseInput, CreateDatabaseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
