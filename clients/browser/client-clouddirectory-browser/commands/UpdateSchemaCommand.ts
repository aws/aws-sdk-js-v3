import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateSchema } from "../model/operations/UpdateSchema";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSchemaInput } from "../types/UpdateSchemaInput";
import { UpdateSchemaOutput } from "../types/UpdateSchemaOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/UpdateSchemaInput";
export * from "../types/UpdateSchemaOutput";
export * from "../types/UpdateSchemaExceptionsUnion";

export class UpdateSchemaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSchemaInput,
      OutputTypesUnion,
      UpdateSchemaOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateSchema;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSchemaInput,
    UpdateSchemaOutput,
    Blob
  >();

  constructor(readonly input: UpdateSchemaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateSchemaInput, UpdateSchemaOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSchemaInput, UpdateSchemaOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
