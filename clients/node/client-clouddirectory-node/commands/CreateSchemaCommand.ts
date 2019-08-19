import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSchema } from "../model/operations/CreateSchema";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSchemaInput } from "../types/CreateSchemaInput";
import { CreateSchemaOutput } from "../types/CreateSchemaOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/CreateSchemaInput";
export * from "../types/CreateSchemaOutput";
export * from "../types/CreateSchemaExceptionsUnion";

export class CreateSchemaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSchemaInput,
      OutputTypesUnion,
      CreateSchemaOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSchema;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSchemaInput,
    CreateSchemaOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSchemaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateSchemaInput, CreateSchemaOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSchemaInput, CreateSchemaOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
