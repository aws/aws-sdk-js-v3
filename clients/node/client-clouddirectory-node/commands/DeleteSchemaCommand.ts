import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteSchema } from "../model/operations/DeleteSchema";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSchemaInput } from "../types/DeleteSchemaInput";
import { DeleteSchemaOutput } from "../types/DeleteSchemaOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/DeleteSchemaInput";
export * from "../types/DeleteSchemaOutput";
export * from "../types/DeleteSchemaExceptionsUnion";

export class DeleteSchemaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSchemaInput,
      OutputTypesUnion,
      DeleteSchemaOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteSchema;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSchemaInput,
    DeleteSchemaOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteSchemaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteSchemaInput, DeleteSchemaOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSchemaInput, DeleteSchemaOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
