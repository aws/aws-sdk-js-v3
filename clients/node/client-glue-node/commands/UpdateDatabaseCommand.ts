import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDatabase } from "../model/UpdateDatabase";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDatabaseInput } from "../types/UpdateDatabaseInput";
import { UpdateDatabaseOutput } from "../types/UpdateDatabaseOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/UpdateDatabaseInput";
export * from "../types/UpdateDatabaseOutput";
export * from "../types/UpdateDatabaseExceptionsUnion";

export class UpdateDatabaseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDatabaseInput,
      OutputTypesUnion,
      UpdateDatabaseOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDatabase;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDatabaseInput,
    UpdateDatabaseOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDatabaseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDatabaseInput, UpdateDatabaseOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDatabaseInput, UpdateDatabaseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
