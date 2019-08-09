import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSchema } from "../model/DeleteSchema";
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
      Blob
    > {
  readonly model = DeleteSchema;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSchemaInput,
    DeleteSchemaOutput,
    Blob
  >();

  constructor(readonly input: DeleteSchemaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
